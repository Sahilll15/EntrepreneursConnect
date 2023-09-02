const mongoose = require('mongoose');
const User = require('./user.models');

const ProductSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        index: true
    },
    media: {
        type: String,
    },
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        name: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        }
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    savedBy: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]

}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
