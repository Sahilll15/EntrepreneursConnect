import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/auth/authSlice';
import postReducer from './redux/posts/postSlice'
import likeReducer from './redux/likes/likeSlice'
import notificationReducer from './redux/notification/notificationSlice'
import CommunityReducer from './redux/community/CommunitySlice'
import commentReducer from './redux/comments/commentSlice'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
    reducer: {
        user: authReducer,
        posts: postReducer,
        likes: likeReducer,
        community: CommunityReducer,
        notifications: notificationReducer,
        comments: commentReducer
    },
    middleware


})

export default store;