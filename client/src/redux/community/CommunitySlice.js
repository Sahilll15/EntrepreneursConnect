import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { updateCommunity, leaveGroup, createCommunity, getCommunity, getCommunityById, searchGroups, createDiscussionCommunity, getCommunityDiscussion, getGroupsJoined } from './CommunityAcitions'


const initialState = {
    community: null,
    communities: [],
    loading: false,
    error: null,
    communityById: null,
    discussion: null,
    discussions: [],
    discussionLoading: false,
    groupsJoined: [],
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
                // state.communities.push(action.payload);
            })
            .addCase(createCommunity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getCommunity.pending, (state) => {
                state.loading = true;
            }
            )
            .addCase(getCommunity.fulfilled, (state, action) => {
                state.loading = false;
                state.communities = action.payload;
            }
            )
            .addCase(getCommunity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
            ).addCase(getCommunityById.pending, (state, action) => {
                state.loading = true;
            }).addCase(getCommunityById.fulfilled, (state, action) => {
                state.loading = false;
                state.communityById = action.payload;
            }).addCase(getCommunityById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(createDiscussionCommunity.pending, (state, action) => {
                state.loading = true;
                state.discussionLoading = true;
            }
            )
            .addCase(createDiscussionCommunity.fulfilled, (state, action) => {
                state.loading = false;
                state.discussion = action.payload;
                state.discussionLoading = false;
            }
            )
            .addCase(createDiscussionCommunity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.discussionLoading = false;
            }
            )
            .addCase(getCommunityDiscussion.pending, (state, action) => {
                state.loading = true;
            }
            )
            .addCase(getCommunityDiscussion.fulfilled, (state, action) => {
                state.loading = false;
                state.discussions = action.payload.discussions || [];
            }
            )
            .addCase(getCommunityDiscussion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
            )
            .addCase(getGroupsJoined.pending, (state, action) => {
                state.loading = true;
            }
            )
            .addCase(getGroupsJoined.fulfilled, (state, action) => {
                state.loading = false;
                state.groupsJoined = action.payload.groups;
            }
            )
            .addCase(getGroupsJoined.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }
            )

            .addCase(searchGroups.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(searchGroups.fulfilled, (state, action) => {
                state.loading = false;
                state.communities = action.payload;
            })
            .addCase(searchGroups.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


            .addCase(leaveGroup.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(leaveGroup.fulfilled, (state, action) => {
                state.loading = false;
                state.communities = state.communities.filter((community) => community._id !== action.payload._id);
            })
            .addCase(leaveGroup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(updateCommunity.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(updateCommunity.fulfilled, (state, action) => {
                state.loading = false;
                state.community = action.payload;
            })
            .addCase(updateCommunity.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })


    }
})


export default communitySlice.reducer;

