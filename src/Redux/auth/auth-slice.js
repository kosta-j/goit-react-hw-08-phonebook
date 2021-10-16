import { createSlice } from '@reduxjs/toolkit';
import { authOperations } from '.';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};
// console.log('authOperations:', authOperations);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fullfilled](state, action) {
      console.log('register fullfilled');
    },
    [authOperations.register.rejected](state, action) {
      console.log(action.error);
    },
  },
});

export default authSlice.reducer;
