import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNotifications } from './notificationActions'

const initialState = {
    notifications: [],
    loading: false,
    error: "",
    success: false,
    notification: null

}


export const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        getNotifications: (state, action) => {
            state.notifications = action.payload
        }
    },
    extraReducers: (builder) => {
        //fetchposts
        builder.addCase(getNotifications.pending, (state, action) => {
            state.loading = true;
        }).addCase(getNotifications.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.notifications = action.payload;
        }).addCase(getNotifications.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})


export default notificationSlice.reducer