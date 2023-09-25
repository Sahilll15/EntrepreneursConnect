
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const host = process.env.REACT_APP_API_HOST

export const getRefrealsToken = createAsyncThunk(
    'user/getrefrealstoken',
    async (referalCode, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/refreals/refrealtoken`,
                {
                    referalCode
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );
            if (response.status === 200) {
                return response.data;
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message)
        }
    }
)


export const fetchReferalToken = createAsyncThunk(
    'user/fetchreferaltoken',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/refreals/getMyReferalToken`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );
            if (response.status === 200) {
                return response.data;
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message)
        }
    }
)
