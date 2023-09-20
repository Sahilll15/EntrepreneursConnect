import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
const host = process.env.REACT_APP_API_HOST


export const createCommunity = createAsyncThunk(
    'community/create',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/groups/creategroup/`,
                {
                    groupname: formData.groupName,
                    description: formData.bio,
                    // image: formData.image,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },

                }
            );

            if (response.status === 201) {
                console.log(response.data);
                toast.success(response.data.mssg);
                return response.data;
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


//get the community

export const getCommunity = createAsyncThunk(
    'community/get',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/groups/getgroups/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    })



export const getCommunityById = createAsyncThunk(
    'community/getCommunityById',
    async (groupId, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/groups/getgroupbyid/${groupId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );
            if (response.status === 200) {
                console.log(response.data);
                return response.data;
            } else {
                console.log('error');
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)


export const createDiscussionCommunity = createAsyncThunk(
    'community/createDiscussion',
    async ({ newTitle, newContent, id }, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${host}/api/v1/groups/creatediscussion/${id}`,
                {
                    title: newTitle,
                    content: newContent,
                }
                , {
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


export const getCommunityDiscussion = createAsyncThunk(
    'community/getCommunityDiscussion',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/groups/getdiscussions/${id}`, {
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



export const getGroupsJoined = createAsyncThunk(
    'community/getGroupsJoined',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/groups/getgroupsjoined/`, {
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


