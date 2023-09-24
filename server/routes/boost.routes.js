const express = require('express')
const router = express.Router()

const { createBoost } = require('../controllers/boost.controllers')

router.get('/getboostedproducts', createBoost)


module.exports = router;