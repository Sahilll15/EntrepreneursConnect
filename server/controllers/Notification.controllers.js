const Notification = require("../models/notifications.models")
const User = require("../models/user.models")


const getNotifications = async (req, res) => {
    try {
        const user = req.user._id;
        const notifications = await Notification.find({ receiver: user }).sort({ timestamp: -1 }).populate('sender');
        res.status(200).json({ notifications: notifications, message: 'success' });
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
}


const createNotification = async (senderId, receiverId, type, content) => {
    try {
        const senderUser = await User.findById(senderId);
        if (!senderUser) {
            return;
        }

        const newNotification = new Notification({
            sender: {
                id: senderId,
                user: senderUser.toObject()
            },
            receiver: receiverId,
            type: type,
            content: content
        });

        await newNotification.save();

        return newNotification;
    } catch (error) {
        console.error("Error creating notification:", error);
        throw error;
    }
};


module.exports = {
    getNotifications,
    createNotification
}