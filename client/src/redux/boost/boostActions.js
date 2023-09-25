import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const host = process.env.REACT_APP_API_HOST


export const getBoostedProducts = createAsyncThunk(
    "boost/getBoostedProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/boost/getboostedproducts`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,

                }
            })
            if (response.status === 200) {
                return response.data
            } else {
                return rejectWithValue(response.data)
            }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)





export const getBoostedUser = createAsyncThunk(
    "boost/getBoostedUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/boost/getboosteduser`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                }
            })
            if (response.status === 200) {
                return response.data
            } else {
                return rejectWithValue(response.data)
            }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)


