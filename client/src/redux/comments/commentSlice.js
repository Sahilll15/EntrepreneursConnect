import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getcomment, getCommentsById, addcomment, deleteComment } from './commentActions'

const initialState = {
    comments: [],
    loading: false,
    error: ""

}


export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
    }
    ,
    extraReducers: (builder) => {
        builder.addCase(getcomment.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getcomment.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload.comments;
        }
        )
        builder.addCase(getcomment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }


        )
        builder.addCase(getCommentsById.pending, (state, action) => {
            state.loading = true;
        }
        )
        builder.addCase(getCommentsById.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = action.payload.comments;
        }
        )
        builder.addCase(getCommentsById.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        )
        builder.addCase(addcomment.pending, (state, action) => {
            state.loading = true;
        }
        )
        builder.addCase(addcomment.fulfilled, (state, action) => {

            state.loading = false;
            state.comments.push(action.payload.comment);
        }
        )
        builder.addCase(addcomment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        )

        builder.addCase(deleteComment.pending, (state, action) => {
            state.loading = true;
        }
        )
        builder.addCase(deleteComment.fulfilled, (state, action) => {
            state.loading = false;
            state.comments = state.comments.filter(comment => comment._id !== action.payload.comment._id);
        }
        )

        builder.addCase(deleteComment.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        )

    }
})


export default commentSlice.reducer;