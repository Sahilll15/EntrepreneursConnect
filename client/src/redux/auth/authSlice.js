import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { resetPassword, sendResetPassword, updateAvatar, resendVerificationEmail, getSearchUser, deleteAccount, registerUser, getProfile, loginUser, getLoggedInUser, updateProfile, FollowUnfollow, getLeaderBoard, getUserStats } from './authActions';

const initialState = {
    user: null,
    profileUser: null,
    isAuthenticated: false,
    loading: false,
    error: "",
    success: false,
    token: "",
    followunfollowLoading: false,
    registerUserLoading: false,
    leaderboard: [],
    userStats: [],
    searchUser: [],
    initialLoading: false,
    emailVerificationLoading: false,
    resetPasswordLoading: false,
    referalCode: "",
    refrealTokenLoading: false,

}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //register reducer start
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
        // Login reducer start
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
        // Login reducer end
        // Get logged in user reducer start
        builder.addCase(getLoggedInUser.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.initialLoading = true
        }
        );
        builder.addCase(getLoggedInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Get logged in user reducer end
        // Update profile reducer start
        builder.addCase(updateProfile.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(updateProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        }
        );
        builder.addCase(updateProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Update profile reducer end
        // Get profile reducer start
        builder.addCase(getProfile.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profileUser = action.payload.user;
        }
        );
        builder.addCase(getProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Get profile reducer end
        // Follow Unfollow reducer start
        builder.addCase(FollowUnfollow.pending, (state, action) => {

            state.followunfollowLoading = true;
        }
        );
        builder.addCase(FollowUnfollow.fulfilled, (state, action) => {
            state.followunfollowLoading = false;
            state.user = action.payload.user;
        }
        );
        builder.addCase(FollowUnfollow.rejected, (state, action) => {
            state.followunfollowLoading = false;
            state.error = action.payload;
        }
        );

        // Follow Unfollow reducer end
        // Get LeaderBoard reducer start
        builder.addCase(getLeaderBoard.pending, (state, action) => {

            state.loading = true;
        }
        );
        builder.addCase(getLeaderBoard.fulfilled, (state, action) => {
            state.loading = false;
            state.leaderboard = action.payload.users;
        }
        );
        builder.addCase(getLeaderBoard.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Get LeaderBoard reducer end
        // Get User Stats reducer start

        builder.addCase(getUserStats.pending, (state, action) => {

            state.loading = true;
        }
        );
        builder.addCase(getUserStats.fulfilled, (state, action) => {
            state.loading = false;
            state.userStats = action.payload.userStats;
        }
        );
        builder.addCase(getUserStats.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Get User Stats reducer end
        // Get Search User reducer start
        builder.addCase(getSearchUser.pending, (state, action) => {

            state.loading = true;
        }
        );
        builder.addCase(getSearchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.searchUser = action.payload.users;
        }
        );
        builder.addCase(getSearchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Get Search User reducer end
        // Delete Account reducer start
        builder.addCase(deleteAccount.pending, (state, action) => {

            state.loading = true;
        }
        );
        builder.addCase(deleteAccount.fulfilled, (state, action) => {
            state.loading = false;
            state.user = null;
            state.isAuthenticated = false;
        }
        );
        builder.addCase(deleteAccount.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Delete Account reducer end
        // Resend Verification Email reducer start
        builder.addCase(resendVerificationEmail.pending, (state, action) => {

            state.emailVerificationLoading = true;
        }
        );
        builder.addCase(resendVerificationEmail.fulfilled, (state, action) => {
            state.emailVerificationLoading = false;
            state.success = true;
        }
        );
        builder.addCase(resendVerificationEmail.rejected, (state, action) => {
            state.emailVerificationLoading = false;
            state.error = action.payload;
        }
        );

        // Resend Verification Email reducer end
        // Update Avatar reducer start
        builder.addCase(updateAvatar.pending, (state, action) => {

            state.loading = true;
        }
        );
        builder.addCase(updateAvatar.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
        }
        );
        builder.addCase(updateAvatar.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );

        // Update Avatar reducer end
        // Send Reset Password reducer start
        builder.addCase(sendResetPassword.pending, (state, action) => {
            state.resetPasswordLoading = false
        }
        );
        builder.addCase(sendResetPassword.fulfilled, (state, action) => {
            state.resetPasswordLoading = false
            state.success = true;
        }
        );
        builder.addCase(sendResetPassword.rejected, (state, action) => {
            state.resetPasswordLoading = false
            state.error = action.payload;
        }
        );

        // Send Reset Password reducer end
        // Reset Password reducer start
        builder.addCase(resetPassword.pending, (state, action) => {

            state.resetPasswordLoading = true;
        }
        );
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.resetPasswordLoading = false;
            state.success = true;
        }
        );
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.resetPasswordLoading = false;
            state.error = action.payload;
        }
        );



    },
});

export default authSlice.reducer;
