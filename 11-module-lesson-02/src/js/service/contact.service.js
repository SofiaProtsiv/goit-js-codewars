import axios from 'axios';

axios.defaults.baseURL = 'https://62d459315112e98e484e5213.mockapi.io';
// axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;

  // const data = await fetch(`${BASE_URL}/contacts`);
  // return await data.json();
};

// GET -> /contacts/:id
export const getContactById = async id => {
  const { data } = await axios.get(`/contacts/${id}`);
  return data;

  // const data = await fetch(`${BASE_URL}/contacts/${id}`);
  // return await data.json();
};

// POST -> /contacts
export const createContact = async contact => {
  const { data } = await axios.post('/contacts', contact);
  return data;

  // const options = {
  //   method: 'POST',
  //   body: JSON.stringify(contact),
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   },
  // };

  // const response = await fetch(`${BASE_URL}/contacts`, options);
  // return await response.json();
};

// PUT -> /contacts/:id
export const updateContact = async newContact => {
  const { data } = await axios.put(`/contacts/${newContact.id}`, newContact);
  return data;

  // const options = {
  //   method: 'PUT',
  //   body: JSON.stringify(newContact),
  //   headers: {
  //     'Content-Type': 'application/json; charset=UTF-8',
  //   },
  // };

  // const response = await fetch(
  //   `${BASE_URL}/contacts/${newContact.id}`,
  //   options
  // );

  // return await response.json();
};

// DELETE -> /contacts/:id
export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;

  // const options = {
  //   method: 'DELETE',
  // };

  // const response = await fetch(`${BASE_URL}/contacts/${id}`, options);

  // return await response.json();
};
