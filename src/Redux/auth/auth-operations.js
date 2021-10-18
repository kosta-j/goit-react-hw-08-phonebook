import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    //TODO:token set
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    //TODO:token set
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk('users/logout', async () => {
  try {
    await axios.post('/users/logout');
    //TODO:token set
  } catch (error) {
    console.log(error.message);
  }
});
// TODO: need to move all requests to APIservice file
