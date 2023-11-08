import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchDeleteContact,
  fetchGetContacts,
} from './operations';


const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = {
  arrContact: [],
  isLoading: false,
  error: null,
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchDeleteContact.pending, handlePending)
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.arrContact.findIndex(
          task => task.id === action.payload.id
        );
        state.arrContact.splice(index, 1);
        state.error = null;
      })
      .addCase(fetchDeleteContact.rejected, handleRejected)
      .addCase(fetchGetContacts.pending, handlePending)
      .addCase(fetchGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.arrContact = action.payload;
      })
      .addCase(fetchGetContacts.rejected, handleRejected)
      .addCase(fetchAddContact.pending, handlePending)
      .addCase(fetchAddContact.fulfilled, (state, action) => {
        state.arrContact.push(action.payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchAddContact.rejected, handleRejected);
  },
});

export const { addContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
