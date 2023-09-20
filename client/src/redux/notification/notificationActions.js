import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const host = process.env.REACT_APP_API_HOST
export const getNotifications = createAsyncThunk(
    'notifications/getNotifications',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/notifications/getnotifications`,
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

export const deleteAllNotificatiosn = createAsyncThunk(
    'notifications/deleteAllNotifications',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${host}/api/v1/notifications/deleteallnotifications`,
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