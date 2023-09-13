const mongoose = require('mongoose')
const User = require('../models/user.models')


const subscriptionSchema = mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    plan: {
        type: String,
        enum: ["regular", "modrate", "'pro"]
    }

})


const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = Subscription;
