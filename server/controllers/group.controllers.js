const { Group, Discussion } = require('../models/group.models')
const User = require('../models/user.models')


const createGroup = async (req, res) => {
    const { groupname, description } = req.body;

    try {

        const existingGroup = await Group.findOne({ groupname });
        if (existingGroup) {
            return res.status(400).json({ msg: "A group with this name already exists" })
        }

        if (!groupname || !description) {
            return res.status(400).json({ msg: "ALL fields are required!!" })
        }

        const groupAdmin = req.user._id;
        const admin = await User.findById(groupAdmin);
        if (!admin) {
            return res.status(400).json({ msg: "Admin is not valid user " })
        }

        const newGroup = await Group.create({
            groupname,
            description,
            groupAdmin
        })

        newGroup.members.push(groupAdmin);
        await newGroup.save();

        res.status(201).json({ group: newGroup, mssg: "new group created" })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}


const getGroups = async (req, res) => {
    try {
        const groups = await Group.find().sort({ createdAt: -1 })
        const total = groups.length
        res.status(200).json({ groups: groups, mssg: "groups fetched successfully", qty: total });
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

//search groups
const searchGroups = async (req, res) => {
    try {
        const { groupname } = req.query;
        const groups = await Group.find({ groupname: { $regex: groupname, $options: 'i' } });
        const total = groups.length

        res.status(200).json({ groups: groups, msgs: "groups fetched successfully", qty: total });

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

const JoinGroup = async (req, res) => {
    const { groupId } = req.params;
    try {
        const GroupExists = await Group.findById(groupId);
        if (!GroupExists) {
            return res.status(400).json({ msg: "Group does not exist" })
        }
        const user = req.user._id;
        if (GroupExists.members.includes(user)) {
            return res.status(400).json({ msg: "You are already a member of this group" })
        }
        GroupExists.members.push(user);
        await GroupExists.save();

        res.status(200).json({ group: GroupExists, mssg: "You have joined this group" })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}


//leave the group
const leaveGroup = async (req, res) => {
    const { groupId } = req.params;
    try {
        const GroupExists = await Group.findById(groupId);
        if (!GroupExists) {
            return res.status(400).json({ msg: "Group does not exist" })
        }
        const user = req.user._id;
        if (GroupExists.members.includes(user)) {
            GroupExists.members = GroupExists.members.filter(memberId => memberId.toString() !== user.toString());
        }

        await GroupExists.save();

        res.status(200).json({ group: GroupExists, mssg: "You have left this group" })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}

//delete group
const deleteGroup = async (req, res) => {
    const { groupId } = req.params;
    try {
        const user = req.user._id;

        const group = await Group.findById(groupId);
        if (!group) {
            return res.status(400).json({ msg: "Group does not exist" })
        }
        if (group.groupAdmin.toString() !== user.toString()) {
            return res.status(401).json({ msg: "You are not authorized to delete this group" })
        }
        await Group.findByIdAndDelete(groupId);
        res.status(200).json({ msg: "Group deleted successfully", group: group })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}



//Group Disscusion  start from here

const createDiscussion = async (req, res) => {
    const { groupId } = req.params;
    const { title, content } = req.body;
    try {
        const GroupExist = await Group.findById(groupId);
        if (!GroupExist) {
            return res.status(400).json({ msg: "Group does not exist" })
        }
        const user = req.user._id;
        if (!title || !content) {
            return res.status(400).json({ msg: "All fields are required" })
        }

        if (!GroupExist.members.includes(user)) {
            return res.status(400).json({ msg: "You are not a member of this group" })
        }

        const newDiscussion = await Discussion.create({
            groupId,
            title,
            content,
            author: user
        }
        )
        GroupExist.discussions.push(newDiscussion._id);
        await GroupExist.save();

        res.status(201).json({ discussion: newDiscussion, mssg: "new discussion created" })
    }
    catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}

//get the disccusion of that group
const getDiscussions = async (req, res) => {
    const { groupId } = req.params;
    try {
        const discussion = await Discussion.find({ groupId });
        if (!discussion) {
            return res.status(400).json({ msg: "No discussion found" })
        }
        res.status(200).json({ discussion: discussion, mssg: "discussion fetched successfully" })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}

const deleteDiscussion = async (req, res) => {
    const { groupId, discussionId } = req.params;
    try {
        const GroupExist = await Group.findById(groupId);
        if (!GroupExist) {
            return res.status(400).json({ msg: "Group does not exist" })
        }
        const user = req.user._id;
        const discussion = await Discussion.findById(discussionId);
        if (!discussion) {
            return res.status(400).json({ msg: "Discussion does not exist" })
        }
        //check if user is part of the group
        if (!GroupExist.members.includes(user)) {
            return res.status(400).json({ msg: "You are not a member of this group" })
        }
        //check if user is the author of the discussion
        if (discussion.author.toString() !== user.toString()) {
            return res.status(401).json({ msg: "You are not authorized to delete this discussion" })
        }

        await Discussion.findByIdAndDelete(discussionId);

        res.status(200).json({ msg: "Discussion deleted successfully" })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error);
    }
}



module.exports = {
    createGroup,
    getGroups,
    searchGroups,
    JoinGroup,
    leaveGroup,
    deleteGroup,
    createDiscussion,
    getDiscussions,
    deleteDiscussion

}