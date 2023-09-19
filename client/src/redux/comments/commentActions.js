import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const host = process.env.REACT_APP_API_HOST

export const getcomment = createAsyncThunk(
    'comment/getcomment',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/comments/getallcomments`, {
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
                console.log('error');
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

export const addcomment = createAsyncThunk(
    'comment/addcomment',
    async ({ newComment, postId }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${host}/api/v1/comments/addcomment/${postId}`, { comment: newComment }, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                }
            })
            if (response.status === 201) {
                console.log(response.data);
                return response.data;
            }
            else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)

export const getCommentsById = createAsyncThunk(
    'comment/getCommentByPostId',
    async (postId, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/comments/getcomments/${postId}`, {
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
                console.log('error');
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)


export const deleteComment = createAsyncThunk(
    'comment/deleteComment',
    async ({ commentId }, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`${host}/api/v1/comments/deletecomment/${commentId}`, {
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
                console.log('error');
                return rejectWithValue(response.data.message);
            }

        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)