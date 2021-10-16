// import axios from 'axios';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
} from './actions';
import { store } from './store';

// axios.defaults.baseURL = 'http://localhost:3001';

export const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    const contacts = store.getState().contacts.items;

    //duplicated name check:
    if (contacts?.filter(item => item.name === name).length > 0) {
      return dispatch(addContactError(`${name} is already in contacts`));
    }

    dispatch(addContactRequest());
    dispatch(addContactSuccess());

    // axios
    //   .post('/contacts', contact)
    //   .then(({ data }) => dispatch(addContactSuccess(data)))
    //   .catch(error => dispatch(addContactError(error)));
  };

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  dispatch(deleteContactSuccess());

  // axios
  //   .delete(`/contacts/${id}`)
  //   .then(() => dispatch(deleteContactSuccess(id)))
  //   .catch(error => dispatch(deleteContactError(error)));
};

export const fetchContact = () => dispatch => {
  dispatch(fetchContactRequest());
  dispatch(fetchContactSuccess());

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => dispatch(fetchContactSuccess(data)))
  //   .catch(error => dispatch(fetchContactError(error)));
};
