const Router = require('express')
const router = Router()

const { verifyemail, resendVerificatoin, deleteAccount, loggedInUser, registerUser, userRecommendation, getUserStats, searchUser, leaderBoard, loginUser, updateavatar, userInfo, userProfile, userFollowUnfollow, editProfile } = require('../controllers/user.controllers')
const { verifyJWT } = require('../middleware/auth.middleware')
const { imageUpload } = require('../middleware/upload.midleware')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/userinfo', verifyJWT, userInfo)
router.get('/userprofile/:userID', verifyJWT, userProfile)
router.put('/userfollowunfollow/:followUserID', verifyJWT, userFollowUnfollow)
router.put('/editprofile', verifyJWT, editProfile)
router.get('/leaderboard', leaderBoard)
router.get('/searchuser', verifyJWT, searchUser)
router.get('/userrecommendation', verifyJWT, userRecommendation)
router.get('/verifyemail/:tokenId', verifyemail)
router.get('/loggedinuser', verifyJWT, loggedInUser)
router.get('/userstats', verifyJWT, getUserStats)
router.delete('/deleteaccount', verifyJWT, deleteAccount)
router.post('/resendverification', resendVerificatoin)
router.put('/updateavatar', imageUpload, verifyJWT, updateavatar)

module.exports = router;

