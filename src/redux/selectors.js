export const getContacts = state => {
  // console.log(state.contacts.arrContact);
  return state.contacts ?? [];
};

export const filterContactArr = state => {
  return state.filter.value;
};
