import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseApiUrl } from '../../api/api';

const initialState = {
  user: null,
  loading: false,
  error: null,
  token: null,
  expirationTime: null,
};

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await axios.post(`${baseApiUrl}/login`, credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.expirationTime = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("expirationTime");
    },
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.expirationTime = Date.now() + 86400000; // 1 day
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("expirationTime", state.expirationTime);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        const { user, token } = action.payload;
        state.loading = false;
        state.user = user;
        state.token = token;
        state.expirationTime = Date.now() + 86400000; // 1 day
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        localStorage.setItem("expirationTime", state.expirationTime);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
