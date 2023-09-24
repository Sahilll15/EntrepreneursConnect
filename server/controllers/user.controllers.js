const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.models')
const Post = require('../models/Product.models')
const Comment = require('../models/comments.models')
const { io } = require('../index.js')
const { sendVerificationEmail, generateverificationToken } = require('../utils/email')
const { createNotification } = require('../controllers/Notification.controllers')
const { successFullVerification } = require('../utils/EmailTemplates')
const { imageUpload } = require('../middleware/upload.midleware')

const AWS = require('aws-sdk')
require('dotenv').config();


AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'ap-south-1'
});


const s3 = new AWS.S3();



const updateavatar = async (req, res) => {

    try {
        const userId = req.user._id;
        //upload the rqe.file in s3 bucket for profile
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: `${userId}/profile/${req.file.originalname}`,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "No user with this ID" });
        }

        await s3.upload(params, async (error, data) => {

            if (error) {
                res.status(500).json({ message: error.message });
                console.log(error);
            }

            user.avatar.url = data.Location;
            await user.save();
            res.status(200).json({ message: "user updated succesfully", user: user });
        })

    }

    catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}



const deleteAccount = async (req, res) => {
    const user = req.user._id;
    try {
        const ExistingUser = await User.findById(user);
        if (!ExistingUser) {
            return res.status(404).json({ message: "No user with this ID" })
        }
        //delete all the post done by the user
        const posts = await Post.find({ "author.id": user });
        if (posts.length > 0) {
            posts.forEach(async (post) => {
                await post.remove();
            })
        }

        //delete all the comments done by the user
        const comments = await Comment.find({ "commentedBy.id": user }).sort({ createdAt: -1 });
        console.log(comments)
        if (comments.length > 0) {
            comments.forEach(async (comment) => {
                await comment.remove();
            }
            )


            const deletedUser = await User.findByIdAndDelete(user);
            if (!deletedUser) {
                return res.status(404).json({ message: "No user with this ID" })
            }
            res.status(200).json({ message: "Account deleted successfully" })

        }

    }

    catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}


const userFollowUnfollow = async (req, res) => {
    const { followUserID } = req.params;
    try {
        const user = req.user._id;
        const followUser = await User.findById(followUserID)
        if (!followUser) {
            return res.status(404).json({ message: "No user with this ID" });
        }
        const currentUser = await User.findById(user);
        if (!currentUser) {
            return res.status(404).json({ message: "No user with this ID" });
        }

        const isFollowing = currentUser.following.includes(followUserID);
        if (isFollowing) {
            currentUser.following.pull(followUserID);
            followUser.followers.pull(user);
        } else {
            currentUser.following.push(followUserID);
            followUser.followers.push(user);
        }
        await currentUser.save();
        await followUser.save();

        if (isFollowing) {
            //send notification
            const notificationMessage = `${currentUser.username} followed you.`;
            await createNotification(currentUser._id, followUser._id, 'follow', notificationMessage);


            res.status(200).json({ message: 'unfollowed', followUser: followUser, currentUser: currentUser });
        } else {
            //send notification
            // const notificationMessage = `${currentUser.username} unfollowed you.`;
            // await createNotification(currentUser._id, followUser._id, 'unfollow', notificationMessage);
            res.status(200).json({ message: 'followed', followUser: followUser, currentUser: currentUser });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}


const loggedInUser = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({ user: user, message: 'success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

const verifyemail = async (req, res) => {
    try {
        const tokenId = req.params.tokenId;
        const user = await User.findOne({ verificationToken: tokenId });
        if (!user) {
            return res.status(404).json({ message: 'Invalid verification token.' });
        }

        user.isVerified = true;
        user.verificationToken = null;
        await user.save();

        const congratulationContent = successFullVerification();

        res.send(congratulationContent);

    } catch (error) {
        res.status(500).json({ message: 'An error occurred during email verification.' });
        console.log(error);
    }
};

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !password || !email) {
            return res.status(400).json({ message: "Not all fields have been entered" })
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "The password needs to be at least 6 characters long" })
        }


        const existedUser = await User.findOne({
            $or: [{ username }, { email }],
        });

        if (existedUser) {
            return res.status(400).json({ message: "An account with this username or email  already exists" })
        }
        const verificationToken = generateverificationToken(email);

        const newUser = await User.create({
            username,
            email,
            password,
            verificationToken
        })
        await sendVerificationEmail(email, verificationToken);
        const token = jwt.sign({
            user: newUser
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )
        res.json({ message: 'Registration successful. Please check your email for verification.', verificationToken: verificationToken, user: newUser });

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}


const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Not all fields have been entered" })
        }
        const user = await User.findOne({
            email
        })

        if (!user) {
            return res.status(400).json({ message: " account with this username does not exist!!" })
        }

        if (!user.isVerified) {
            return res.status(400).json({ message: "Please verify your email to login" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const token = jwt.sign({
            user: user
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        res.status(200).json({ user: user, token: token, message: "user logged in" })

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}


const userInfo = async (req, res) => {
    res.status(200).json({ message: 'Authentication successful', user: req.user });
};


const userProfile = async (req, res) => {
    const { userID } = req.params;
    try {
        const user = await User.findById(userID).select('-password');

        if (!user) {
            return res.status(404).json({ message: "No user with this ID" });
        }

        res.status(200).json({ user: user, message: 'success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};



const editProfile = async (req, res) => {
    const { bio, username } = req.body;
    try {
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "No user with this ID" });
        }
        user.bio = bio;
        user.username = username;
        await user.save();
        res.status(200).json({ message: "user updated succesfully", user: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}


const leaderBoard = async (req, res) => {
    try {
        const users = await User.find().sort({ points: -1 }).limit(5).select('_id avatar username points')
        res.status(200).json({ users: users, message: "success", total: users.length });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

const searchUser = async (req, res) => {
    try {
        const { username } = req.query;

        const users = await User.find({ username: { $regex: username, $options: 'i' } }).select('_id username avatar')
        if (users.length === 0) {
            return res.status(404).json({ message: "No user with this username" });
        }

        //remove the current user account
        const currentUserID = req.user._id;
        const currentUser = await User.findById(currentUserID);
        if (!currentUser) {
            return res.status(404).json({ message: "No user with this ID" });
        }

        const filteredUsers = users.filter((user) => user._id.toString() !== currentUserID.toString());


        res.status(200).json({ users: filteredUsers, message: "success", total: filteredUsers.length })
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}



const userRecommendation = async (req, res) => {
    try {
        const currentUserID = req.user._id;
        const currentUser = await User.findById(currentUserID);
        if (!currentUser) {
            return res.status(404).json({ message: "No user with this ID" });
        }

        const recommandation = await User.find({
            _id: { $ne: currentUserID },
            _id: { $nin: currentUser.following }
        }).limit(5);

        const recommandedUsernameandID = {
            recommandation: recommandation.map((user) => {
                return {
                    username: user.username,
                    _id: user._id,
                    avatar: user.avatar.url
                }
            }
            )
        }
        res.status(200).json({ recommandation: recommandedUsernameandID.recommandation, message: "success", total: recommandation.length })
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}


//getUser stats

const getUserPosts = async (userId) => {
    const posts = await Post.find({ author: userId });
    return posts;
}

const getTotalPostLikes = async (posts) => {
    let totalLikes = 0;
    posts.forEach(post => {
        totalLikes += post.likes.length;
    })
    return totalLikes;
}


const getTotalPostComments = async (posts) => {
    let totalComments = 0;
    posts.forEach(post => {
        totalComments += post.comments.length;
    })
    return totalComments;
}


const getUserStats = async (req, res) => {

    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "No user with this ID" });
        }

        const posts = await getUserPosts(userId);
        const totalLikes = await getTotalPostLikes(posts);
        const totalComments = await getTotalPostComments(posts);
        const userStats = {
            totalPosts: posts.length,
            totalLikes: totalLikes,
            totalComments: totalComments,
            followers: user.followers,
            following: user.following,
            points: user.points
        }
        res.status(200).json({ userStats: userStats, message: "success" });

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}



const resendVerificatoin = async (req, res) => {
    const { email } = req.body;
    try {

        if (!email) {
            return res.status(400).json({ message: "Email is required" })
        }

        const user = await User.findOne({
            email
        })

        console.log(user)

        if (!user) {
            return res.status(404).json({ message: "No user with this email" })
        }
        if (user.isVerified) {
            return res.status(400).json({ message: "This account is already verified" })
        }
        const verificationToken = generateverificationToken(email);
        user.verificationToken = verificationToken;
        await user.save();

        await sendVerificationEmail(email, verificationToken);
        res.status(200).json({ message: 'Verification email sent successfully.', verificationToken: verificationToken, user: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}

module.exports = {
    registerUser,
    loginUser,
    updateavatar,
    userInfo,
    userProfile,
    userFollowUnfollow,
    editProfile,
    leaderBoard,
    searchUser,
    userRecommendation,
    verifyemail,
    loggedInUser,
    getUserStats,
    deleteAccount,
    resendVerificatoin


}