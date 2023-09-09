import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerUser, loginUser, loggedInUser } from './authActions';
import { createSelector } from 'reselect';
const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: "",
    success: false,
    token: ""
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

        })
        //register reducer end
        //login reducer start
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
        //login reducer end
        //loggedInUser reducer start
        builder.addCase(loggedInUser.pending, (state, action) => {
            state.loading = true;
        }
        );
        builder.addCase(loggedInUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.token = action.payload.token;
        }
        );
        builder.addCase(loggedInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
        );
        //loggedInUser reducer end
    },
});

export const selectLoggedInUser = createSelector(
    (state) => state.user,
    (user) => user
);


export default authSlice.reducer;