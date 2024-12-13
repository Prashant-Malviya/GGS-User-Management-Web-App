import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../store/slice/usersSlice';
import searchReducer from '../store/slice/searchSlice';
import authReducer from '../store/slice/authSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    search: searchReducer,
    auth: authReducer,
  },
});

export default store;
