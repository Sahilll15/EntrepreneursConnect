import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/auth/authSlice';
import postReducer from './redux/posts/postSlice'
import likeReducer from './redux/likes/likeSlice'
import CommunityReducer from './redux/community/CommunitySlice'
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
    reducer: {
        user: authReducer,
        posts: postReducer,
        likes: likeReducer,
        community: CommunityReducer
    },
    middleware


})

export default store;