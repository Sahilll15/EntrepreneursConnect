const Router = require('express')
const router = Router()

const { createReferral, getReferedUserByUserID, getMyrefreals } = require('../controllers/refreals.controllers')
const { verifyJWT } = require('../middleware/auth.middleware')

router.post('/createReferals/:referringUserId', verifyJWT, createReferral)
router.get('/getReferedUserByUserID', verifyJWT, getReferedUserByUserID)
router.get('/getMyrefreals', verifyJWT, getMyrefreals)


module.exports = router;

