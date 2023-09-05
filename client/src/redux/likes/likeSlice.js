import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { likePost } from './likesActions';

const initialState = {
    likes: [],
    loading: false,
    error: "",
    success: false,
    like: null

}

export const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(likePost.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(likePost.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.like = action.payload;
            })
            .addCase(likePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }

}
);

export default likeSlice.reducer;