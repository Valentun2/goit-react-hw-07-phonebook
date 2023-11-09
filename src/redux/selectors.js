export const getContacts = state => {
  return state.contacts ?? [];
};

export const filterContactArr = state => {
  return state.filter.value;
};
