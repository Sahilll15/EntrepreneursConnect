import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const token = localStorage.getItem('authtoken')

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/products/getproducts/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                // console.log(response.data);
                return response.data;
            } else {
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);

export const addPost = createAsyncThunk(
    'posts/addPost',
    async (formData, { rejectWithValue }) => {
        try {

            const response = await axios.post(
                'http://localhost:4000/api/v1/products/createproduct/',
                {
                    content: formData.content,
                    media: formData.media
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);



export const deletePost = createAsyncThunk(
    'post/deletepost',
    async (postId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/v1/products/deleteproduct/${postId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })

            if (response.status === 200) {
                toast.success(response.data.mssg)
                return response.data;
            }
            else {
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
)