import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  addContactSuccess,
  addContactError,
  changeFilter,
  deleteContactSuccess,
  fetchContactSuccess,
} from './actions';

const contactItemsReducer = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: addContactCallback,
  [addContactError]: addContactErrorCallback,
  [deleteContactSuccess]: deleteContactCallback,
});

const contactFilterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items: contactItemsReducer,
  filter: contactFilterReducer,
});

function addContactCallback(state, { payload }) {
  console.log('addContactCallback started');
  return [...state, payload];
}

function addContactErrorCallback(_, { payload }) {
  console.log('addContactError started');
  alert(payload);
}

function deleteContactCallback(state, { payload }) {
  return state.filter(item => item.id !== payload);
}

export default contactsReducer;
