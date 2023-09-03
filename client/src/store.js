import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './redux/auth/authSlice';
import thunk from 'redux-thunk'
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];
const store = configureStore({
    reducer: {
        user: authReducer
    },
    middleware


})

export default store;