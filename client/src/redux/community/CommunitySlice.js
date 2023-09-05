import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createCommunity } from './CommunityAcitions'

const initialState = {
    community: null,
    communities: [],
    loading: false,
    error: null

}


export const communitySlice = createSlice({
    name: 'community',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createCommunity.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCommunity.fulfilled, (state, action) => {
                state.loading = false;
                state.community = action.payload;
                state.communities.push(action.payload);
            })
            .addCase(createCommunity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})


export default communitySlice.reducer;