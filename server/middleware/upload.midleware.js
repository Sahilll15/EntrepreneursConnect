const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.memoryStorage(); // Use memory storage to avoid saving to disk

const upload = multer({
    storage: storage,
}).single('media');

module.exports = upload;
