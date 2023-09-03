import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';
import { registerUser, loginUser } from './authActions';

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: "",
    success: false,
    token: ""
}


export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload;
            state.isAuthenticated = true;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        });
        //login reducer start
        builder.addCase(loginUser.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;

        });
    },
});



export default authSlice.reducer;