import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerUser, getProfile, loginUser, getLoggedInUser, updateProfile } from './authActions';

const initialState = {
    user: null,
    profileUser: null,
    isAuthenticated: false,
    loading: false,
    error: "",
    success: false,
    token: "",

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

    },
});

export default authSlice.reducer;
