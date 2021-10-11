import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '.';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fullfilled](state, action) {},
  },
});
