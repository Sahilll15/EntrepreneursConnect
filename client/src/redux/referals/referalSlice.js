import { createSlice } from "@reduxjs/toolkit";
import { fetchReferalToken, getRefrealsToken } from "./referalActions";
const initialState = {
    referalCode: "",
    refrealTokenLoading: false,
    TotalReferral: 0
};


export const referalSlice = createSlice({
    name: 'referal',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getRefrealsToken.pending, (state, action) => {
            state.refrealTokenLoading = true;
        });
        builder.addCase(getRefrealsToken.fulfilled, (state, action) => {
            state.refrealTokenLoading = false;
            state.referalCode = action.payload.referalCode;
        });
        builder.addCase(getRefrealsToken.rejected, (state, action) => {
            state.refrealTokenLoading = false;
            state.error = action.payload;
        });

        builder.addCase(fetchReferalToken.pending, (state, action) => {
            state.refrealTokenLoading = true;
        });
        builder.addCase(fetchReferalToken.fulfilled, (state, action) => {
            state.refrealTokenLoading = false;
            state.referalCode = action.payload.referalCode;
            state.TotalReferral = action.payload.TotalReferral;

        });
        builder.addCase(fetchReferalToken.rejected, (state, action) => {
            state.refrealTokenLoading = false;
            state.error = action.payload;
        });


    }
});


export default referalSlice.reducer;