import { createSlice } from "@reduxjs/toolkit";
import { getBoostedProducts } from './boostActions'

const initialState = {
    boost: 0,
    boostedProducts: [],
    boostedProductsLoading: false
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
    }

})


export default boostSlice.reducer