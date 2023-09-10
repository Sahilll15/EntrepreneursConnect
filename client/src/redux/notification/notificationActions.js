import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getNotifications = createAsyncThunk(
    'notifications/getNotifications',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/v1/notifications/getnotifications`,
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