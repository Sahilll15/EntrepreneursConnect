const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');
const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT;
const userRoutes = require('./routes/user.routes');
const productsRoutes = require('./routes/Product.routes');
const likeRoutes = require('./routes/like.routes');
const commentRoutes = require('./routes/comments.routes');
const refrealsRoutes = require('./routes/refreals.routes');
const groupRoutes = require('./routes/group.routes');
const notificationRoutes = require('./routes/notification.routes');
const myDb = require('./db');

const Server = http.createServer(app);

console.log(PORT);

app.use(express.json());


const corsOptions = {
    origin: ['https://entrepreneursconnect.vercel.app', 'http://localhost:4000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 200,
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 3600,

    error: (err) => {
        return res.status(403).json({ error: 'CORS request is not allowed.' });
    },
};

app.use(cors(corsOptions));

Server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

myDb.myDb();
app.use('/uploads', express.static('uploads'));
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/likes', likeRoutes);
app.use('/api/v1/comments', commentRoutes);
app.use('/api/v1/refreals', refrealsRoutes);
app.use('/api/v1/groups', groupRoutes);
app.use('/api/v1/notifications', notificationRoutes);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});
