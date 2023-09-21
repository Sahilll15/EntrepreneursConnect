import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPosts, addPost, deletePost, fetchpostByUserID, fetchProductsByFollowing } from './postActions'
const initialState = {
    posts: [],
    postsByUser: [],
    loading: false,
    postLoading: false,
    error: "",
    success: false,
    post: null,
    postByFollowing: []
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
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.posts = action.payload;
        }).addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        //addpost
        builder.addCase(addPost.pending, (state, action) => {
            state.postLoading = true;
        }
        ).addCase(addPost.fulfilled, (state, action) => {
            state.postLoading = false;
            state.success = true;
            state.post = action.payload;
        }
        ).addCase(addPost.rejected, (state, action) => {
            state.postLoading = false;
            state.error = action.payload;
        }
        );

        //deletepost
        builder.addCase(deletePost.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.post = action.payload;
        }
        ).addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        //fetchpostbyuserid
        builder.addCase(fetchpostByUserID.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(fetchpostByUserID.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.postsByUser = action.payload;
        }
        ).addCase(fetchpostByUserID.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        //fetchproductsbyfollowing
        builder.addCase(fetchProductsByFollowing.pending, (state, action) => {
            state.loading = true;
        }
        ).addCase(fetchProductsByFollowing.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.postByFollowing = action.payload;
        }
        ).addCase(fetchProductsByFollowing.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

    }
}
);


export default postSlice.reducer;