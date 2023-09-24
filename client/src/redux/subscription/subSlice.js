import { createSlice } from "@reduxjs/toolkit";
import { createSub, getSubscription, getSubscriptionById, cancleSubscription } from './subActions'
const initialState = {
    subscription: [],
    subLoading: false,
    subError: "",
    subSuccess: false,
    subMessage: "",
    subByUser: null
}



export const subSlice = createSlice({
    name: "sub",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createSub.pending, (state, action) => {
            state.subLoading = true
        })
        builder.addCase(createSub.fulfilled, (state, action) => {
            state.subLoading = false
            state.subSuccess = true
            state.subMessage = action.payload.message
        })
        builder.addCase(createSub.rejected, (state, action) => {
            state.subLoading = false
            state.subError = action.payload
        })
        builder.addCase(getSubscription.pending, (state, action) => {
            state.subLoading = true
        })
        builder.addCase(getSubscription.fulfilled, (state, action) => {
            state.subLoading = false
            state.subscription = action.payload
        })
        builder.addCase(getSubscription.rejected, (state, action) => {
            state.subLoading = false
            state.subError = action.payload
        })

        builder.addCase(getSubscriptionById.pending, (state, action) => {
            state.subLoading = true
        })
        builder.addCase(getSubscriptionById.fulfilled, (state, action) => {
            state.subLoading = false
            state.subByUser = action.payload.subscription
        })
        builder.addCase(getSubscriptionById.rejected, (state, action) => {
            state.subLoading = false
            state.subError = action.payload
        })

        builder.addCase(cancleSubscription.pending, (state, action) => {
            state.subLoading = true
        })
        builder.addCase(cancleSubscription.fulfilled, (state, action) => {
            state.subLoading = false
            state.subSuccess = true
            state.subMessage = action.payload.message
        })
        builder.addCase(cancleSubscription.rejected, (state, action) => {
            state.subLoading = false
            state.subError = action.payload
        })


    }
})


export default subSlice.reducer