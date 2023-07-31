import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// // Utility to add JWT
// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// // Utility to remove JWT
// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };
const token = {
    setAuthHeader(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unsetAuthHeader() {
        axios.defaults.headers.common.Authorization = '';
    },
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            token.setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            // After successful login, add the token to the HTTP header
            token.setAuthHeader(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
