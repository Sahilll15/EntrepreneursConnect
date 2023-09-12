const Subscription = require('../models/subscription.models');
const User = require('../models/user.models');

const createSubscription = async (req, res) => {
    const { plan } = req.body;
    try {
        const user = req.user._id;
        const userExists = await User.findById(user);
        if (!userExists) {
            res.status(401).json({ mssg: "user not found" })
        }

        const newSubsciprion = await new Subscription({
            user: user,
            plan: plan
        })

        newSubsciprion.save();

        res.status(200).json({ mssg: "subsciption created", Subscription: newSubsciprion })

    } catch (error) {
        res.status(401).json(error)
    }
}


const getSubscription = async (req, res) => {
    try {
        const subscription = await Subscription.find();
        const qty = subscription.length
        res.status(200).json({ subscription: subscription, qty: qty })
    } catch (error) {
        res.status(401).json(error)
    }
}

const getSubscriptionById = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.status(401).json("user not found")
        }

        const subscription = await Subscription.find({ user: userId })

        res.status(200).json({ mssg: "subscription fetched susscefully", subscription: subscription })
    } catch (error) {
        res.status(401).json(error)
    }
}

const updateSubscription = async (req, res) => {
    const { subscriptionId } = req.body;
    const { plan } = req.body;
    try {
        const user = req.user._id;
        const subscription = await Subscription.findById(subscriptionId);
        if (!subscription) {
            res.status(401).json({ mssg: "subsciprion not found" })
        }

        const newSubsciption = await Subscription.findByIdAndUpdate(subscriptionId, {
            user: user,
            plan: plan
        })

        newSubsciption.save();

        res.status(200).json({ mssg: "subscription updated succcesfully", subscription: newSubsciption })
    } catch (error) {
        res.status(401).json(error)
    }
}

const cancleSubscription = async (res, res) => {
    const { subscriptionId } = req.body;
    try {
        const subscription = await Subscription.findById(subscriptionId);
        if (!subscription) {
            res.status(401).json({ mssg: "subsciprion not found" })
        }

        await Subscription.findByIdAndDelete(subscriptionId);
        res.status(200).json({ mssg: "subscription deleted succcesfully", subscription: subscription })
    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = {
    cancleSubscription, createSubscription, getSubscription, updateSubscription, getSubscriptionById
}