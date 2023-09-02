const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user.models')




const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !password || !email) {
            return res.status(400).json({ msg: "Not all fields have been entered" })
        }

        const existedUser = await User.findOne({
            $or: [{ username }, { email }],
        });

        if (existedUser) {
            return res.status(400).json({ msg: "An account with this username or email  already exists" })
        }

        const newUser = await User.create({
            username,
            email,
            password
        })

        const token = jwt.sign({
            user: newUser
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        res.status(201).json({ user: newUser, token: token, mssg: "new user created" })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}


const loginUser = async (req, res) => {

    const { username, password } = req.body;
    try {
        if (!username | !password) {
            return res.status(400).json({ msg: "Not all fields have been entered" })
        }
        const user = await User.findOne({
            username
        })

        if (!user) {
            return res.status(400).json({ msg: "No account with this username does not exist!!" })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }

        const token = jwt.sign({
            user: user
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        res.status(200).json({ user: user, token: token, mssg: "user logged in" })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}


const updateavatar = async (req, res) => {
    const { avatar } = req.body;
    try {
        const { userId } = req.params;
        if (!avatar) {
            return res.status(400).json({ msg: "No avatar was added" });
        }

        // Find the user by their userId
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ msg: "No user with this ID" });
        }

        // Update the avatar URL
        user.avatar.url = avatar;


        await user.save();

        res.json({ avatar: avatar, msg: "Avatar updated successfully!" });

    } catch (error) {
        res.status(500).json({ error: error.message });
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
            return res.status(404).json({ msg: "No user with this ID" });
        }

        res.status(200).json({ user: user, msg: 'success' });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
};


const userFollowUnfollow = async (req, res) => {
    const { followUserID } = req.params;
    try {
        const user = req.user._id;
        const followUser = await User.findById(followUserID)
        if (!followUser) {
            return res.status(404).json({ msg: "No user with this ID" });
        }
        const currentUser = await User.findById(user);
        if (!currentUser) {
            return res.status(404).json({ msg: "No user with this ID" });
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
            res.status(200).json({ msg: 'unfollowed', followUser: followUser, currentUser: currentUser });
        } else {
            res.status(200).json({ msg: 'followed', followUser: followUser, currentUser: currentUser });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);

    }
}


const editProfile = async (req, res) => {
    const { bio, username } = req.body;
    try {
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "No user with this ID" });
        }
        user.bio = bio;
        user.username = username;
        await user.save();
        res.status(200).json({ msg: "user updated succesfully", user: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}


const leaderBoard = async (req, res) => {
    try {
        const users = await User.find().sort({ points: -1 }).limit(10)
        res.status(200).json({ users: users, msg: "success", total: users.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

const searchUser = async (req, res) => {
    try {
        const { username } = req.query;

        const users = await User.find({ username: { $regex: username, $options: 'i' } }).select('-password')
        if (users.length === 0) {
            return res.status(404).json({ msg: "No user with this username" });
        }
        res.status(200).json({ users: users, msg: "success", total: users.length })
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

const userRecommendation = async (req, res) => {
    try {
        const currentUserID = req.user._id;
        const currentUser = await User.findById(currentUserID);
        if (!currentUser) {
            return res.status(404).json({ msg: "No user with this ID" });
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
        res.status(200).json({ recommandation: recommandedUsernameandID.recommandation, msg: "success", total: recommandation.length })
    } catch (error) {
        res.status(500).json({ error: error.message });
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
    userRecommendation

}