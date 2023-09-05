import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

export const createCommunity = createAsyncThunk(
    'community/create',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://localhost:4000/api/v1/groups/creategroup/',
                {
                    name: formData.name,
                    description: formData.description,
                    image: formData.image,
                }
            );

            if (response.status === 200) {
                console.log(response.data);
                toast.success(response.data.message);
                return response.data.community;
            } else {
                console.log('error');
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);










