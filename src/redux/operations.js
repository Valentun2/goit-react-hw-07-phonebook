import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://654a81e41f197d51e4925817.mockapi.io/contact/contact/${contactId}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchGetContacts = createAsyncThunk(
  'contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://654a81e41f197d51e4925817.mockapi.io/contact/contact'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  'contact/addContact',
  async (arr, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://654a81e41f197d51e4925817.mockapi.io/contact/contact',
        {
          name: arr.name,
          number: arr.number,
        }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
