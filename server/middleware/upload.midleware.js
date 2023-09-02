

//middleware for uplaoding the files

const multer = require('multer')
const path = require('path')
const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    }
    ,
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        const id = uuidv4()
        const filePath = `${id}${ext}`
        req.filePath = filePath
        cb(null, filePath)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
            return cb(new Error('Only images are allowed'))
        }
        cb(null, true)
    }
}).single('media')


module.exports = upload