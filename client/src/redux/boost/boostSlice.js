import { createSlice } from "@reduxjs/toolkit";
import { getBoostedProducts, getBoostedUser } from './boostActions'

const initialState = {
    boost: 0,
    boostedProducts: [],
    boostedProductsLoading: false,
    boostedUser: [],
}


const boostSlice = createSlice({
    name: "boost",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getBoostedProducts.pending, (state, action) => {
            state.boostedProductsLoading = true
        })
        builder.addCase(getBoostedProducts.fulfilled, (state, action) => {
            state.boostedProductsLoading = false
            state.boostedProducts = action.payload.boostedProducts
        })
        builder.addCase(getBoostedProducts.rejected, (state, action) => {
            state.boostedProductsLoading = false
        })
        builder.addCase(getBoostedUser.pending, (state, action) => {
            state.boostedProductsLoading = true
        })
        builder.addCase(getBoostedUser.fulfilled, (state, action) => {
            state.boostedProductsLoading = false
            state.boostedUser = action.payload.boostedUser
        })
        builder.addCase(getBoostedUser.rejected, (state, action) => {
            state.boostedProductsLoading = false
        })

    }

})


export default boostSlice.reducer