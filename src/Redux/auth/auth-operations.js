import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup');
    //TODO:token set
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export default register;

// TODO: need to move all requests to APIservice file
