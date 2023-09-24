import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from 'react-toastify'

const host = process.env.REACT_APP_API_HOST

export const createSub = createAsyncThunk(
    'sub/createSub',
    async (plan, { rejectWithValue }) => {

        try {
            const response = await axios.post(`${host}/api/v1/subscription/createSub`, {
                plan: plan
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                }
            })

            if (response.status === 200) {
                toast.success(response.data.message)
                console.log(response.data)
                return response.data
            } else {
                toast.error(response.data.message)
                return rejectWithValue(response.data)
            }
        } catch (error) {
            toast.error(error.response.data.message)
            return rejectWithValue(error.response.data)
        }


    }
)

export const getSubscription = createAsyncThunk(
    'sub/getSubscription',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/subscription/getSub`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    }
                })

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }

    }

)


export const getSubscriptionById = createAsyncThunk(
    'sub/getSubscriptionById',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/subscription/getSubById/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    }
                })

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }

    }

)

export const updateSubscription = createAsyncThunk(
    'sub/updateSubscription',
    async (subscriptionId, { rejectWithValue }) => {
        try {
            const response = await axios.patch(`${host}/api/v1/subscription/updateSub`, {
                subscriptionId: subscriptionId
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    }
                })

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }

    }

)



export const cancleSubscription = createAsyncThunk(
    'sub/cancleSubscription',
    async (subscriptionId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${host}/api/v1/subscription/cancleSub`, {
                data: {
                    subscriptionId: subscriptionId
                },
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                }
            })

            if (response.status === 200) {

                console.log(response.data);
                return response.data;
            }
            else {
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }

    }

)