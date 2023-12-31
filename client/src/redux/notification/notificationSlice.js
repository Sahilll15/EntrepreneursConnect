import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNotifications, deleteAllNotificatiosn } from './notificationActions'

const initialState = {
    notifications: [],
    notificationLoading: false,
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
            state.notificationLoading = true;

        }).addCase(getNotifications.fulfilled, (state, action) => {
            state.notificationLoading = false;
            state.success = true;
            state.notifications = action.payload;
        }).addCase(getNotifications.rejected, (state, action) => {
            state.notificationLoading = false;
            state.error = action.payload;
        });

        //delete all notifications
        builder.addCase(deleteAllNotificatiosn.pending, (state, action) => {
            state.notificationLoading = true;

        }).addCase(deleteAllNotificatiosn.fulfilled, (state, action) => {
            state.notificationLoading = false;
            state.success = true;
            state.notifications = [];
        }).addCase(deleteAllNotificatiosn.rejected, (state, action) => {
            state.notificationLoading = false;
            state.error = action.payload;
        });
    }
})


export default notificationSlice.reducer