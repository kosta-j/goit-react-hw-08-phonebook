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
  extraReducers:
    // this is working:
    builder => {
      builder.addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });

      builder.addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });

      builder.addCase(authOperations.logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });

      builder.addCase(
        authOperations.fetchCurrentUser.fulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isLoggedIn = true;
        },
      );
    },

  // this does not work:
  // {
  // [authOperations.register.fullfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLoggedIn = true;
  // },
  // [authOperations.logIn.fullfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLoggedIn = true;
  // },
  // },
});

export default authSlice.reducer;
