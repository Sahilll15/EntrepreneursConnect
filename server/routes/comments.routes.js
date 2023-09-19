const Router = require('express')
const router = Router()

const { Addcomment, getCommentsByPostID, deleteComment, updateComment, getAllComments } = require('../controllers/comment.controllers')
const { verifyJWT } = require('../middleware/auth.middleware')

router.get('/getallcomments', verifyJWT, getAllComments)
router.post('/addcomment/:postId', verifyJWT, Addcomment)
router.get('/getcomments/:postId', verifyJWT, getCommentsByPostID)
router.delete('/deletecomment/:commentID', verifyJWT, deleteComment)
router.put('/updatecomment/:commentID', verifyJWT, updateComment)



module.exports = router;