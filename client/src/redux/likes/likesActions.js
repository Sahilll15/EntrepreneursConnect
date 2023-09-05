import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const likePost = createAsyncThunk(
    'likePost',
    async (postId, { rejectWithValue }) => {
        try {
            // Retrieve the token here
            const token = localStorage.getItem('authtoken');

            const response = await axios.post(
                `http://localhost:4000/api/v1/likes/likeDislikePost/${postId}`,
                {},
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
);
