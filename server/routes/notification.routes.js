const express = require('express')
const { verifyJWT } = require('../middleware/auth.middleware')
const { getNotifications } = require('../controllers/Notification.controllers')
const router = express.Router()


router.get('/getnotifications', verifyJWT, getNotifications)


module.exports = router;