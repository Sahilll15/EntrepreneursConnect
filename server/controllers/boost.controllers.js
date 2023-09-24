const Subscription = require('../models/subscription.models');
const User = require('../models/user.models');
const Product = require('../models/Product.models');

const createBoost = async (req, res) => {
    try {
        const subscriptions = await Subscription.find();
        const users = subscriptions.map((sub) => sub.user);

        const allProductsPromises = users.map(async (user) => {
            const products = await Product.find({ author: user })
                .sort({ likes: -1 })
                .populate('author', '_id username avatar')
                .limit(1);
            return products[0];
        });

        const allMostLikedProducts = await Promise.all(allProductsPromises);

        //create an temp attribute
        const boostedProducts = allMostLikedProducts.map((product) => {
            const plainObject = product.toObject();
            plainObject.isBoosted = true;
            return plainObject;
        });

        return res
            .status(200)
            .json({ boostedProducts, mostLikedProducts: boostedProducts });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};




const getBoost = async (req, res) => {
    try {
        const subscription = await Subscription.find();
        const qty = subscription.length
        res.status(200).json({ subscription: subscription, qty: qty })
    } catch (error) {
        res.status(401).json(error)
    }
}



module.exports = {
    createBoost,
    getBoost
}