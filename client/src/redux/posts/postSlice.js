import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPosts, addPost } from './postActions'
const initialState = {
    posts: [],
    loading: false,
    error: "",
    success: false,
    post: null
}


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        //fetchposts
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.posts = action.payload;
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //addpost
        builder.addCase(addPost.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.post = action.payload;
        }
        );
        builder.addCase(addPost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );
    }
}
);


export default postSlice.reducer;