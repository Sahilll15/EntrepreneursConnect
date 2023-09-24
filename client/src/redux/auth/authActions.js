import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const host = process.env.REACT_APP_API_HOST



export const updateAvatar = createAsyncThunk(
    'user/updateAvatar',
    async (file, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${host}/api/v1/auth/updateavatar/`,
                {
                    profile: file,
                },
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
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

)


//resend verification email
export const resendVerificationEmail = createAsyncThunk(
    'user/resendverificationemail',
    async (user, { rejectWithValue }) => {
        console.log('user from resend ver', user.email)
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/resendverification`,
                {
                    email: user.email
                }
            );
            if (response.status === 200) {
                toast.success(response.data.message);
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



export const deleteAccount = createAsyncThunk(
    'user/deleteaccount',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.delete(
                `${host}/api/v1/auth/deleteaccount/`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
                localStorage.removeItem('authtoken');
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
)

export const FollowUnfollow = createAsyncThunk(
    'user/followunfollow',
    async (userID, { rejectWithValue }) => {
        try {
            const response = await axios.put(`${host}/api/v1/auth/userfollowunfollow/${userID}`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                },

            })
            if (response.status === 200) {
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

export const getProfile = createAsyncThunk(
    'user/getProfile',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${host}/api/v1/auth/userprofile/${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                },

            })
            if (response.status === 200) {
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

//update the user profile
export const updateProfile = createAsyncThunk(
    'user/update',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${host}/api/v1/auth/editprofile/`,
                {
                    username: formData.username,
                    email: formData.email,
                    bio: formData.bio,
                    // image: formData.image,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('authtoken')}`,
                    },
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
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


//get logged in user
export const getLoggedInUser = createAsyncThunk(
    'user/getLoggedInUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/auth/loggedinuser/`,
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
            return rejectWithValue(error.response?.data?.message);
        }
    }
);


export const registerUser = createAsyncThunk(
    'user/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/register/`,
                {
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
                return response.data.user;
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

// Define your async thunk for user login
export const loginUser = createAsyncThunk(
    'user/login',
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/login/`,
                {
                    email: user.email,
                    password: user.password,
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
                localStorage.setItem('authtoken', response.data.token);
                return response.data;
            } else {
                toast.error(response.data.message);
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            console.log(error)
            toast.error(error.response?.data?.message);
            return rejectWithValue(error.response?.data?.message);
        }
    }
);



//get laderboard

export const getLeaderBoard = createAsyncThunk(
    'user/leaderboard',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/auth/leaderboard`,
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
            return rejectWithValue(error.response?.data?.message);
        }
    }
)




export const getUserStats = createAsyncThunk(
    'user/stats',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/auth/userstats`,
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
            return rejectWithValue(error.response?.data?.message);
        }
    }
)


export const getSearchUser = createAsyncThunk(
    'user/search',
    async (search, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${host}/api/v1/auth/searchuser?username=${search}`,
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
                console.log('error');
                return rejectWithValue(response.data.message);
            }
        } catch (error) {
            return rejectWithValue(error.response?.data?.message);
        }
    }
)


export const sendResetPassword = createAsyncThunk(
    'user/sendresetpassword',
    async (email, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${host}/api/v1/auth/sendresetpasswordemail`,
                {
                    email: email,
                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
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
)


export const resetPassword = createAsyncThunk(
    'user/resetpassword',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.put(
                `${host}/api/v1/auth/resetpassword`,
                {
                    email: formData.email,
                    password: formData.newPassword,
                    otpCode: formData.otp,

                }
            );

            if (response.status === 200) {
                toast.success(response.data.message);
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
)


