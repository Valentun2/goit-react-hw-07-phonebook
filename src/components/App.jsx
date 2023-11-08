import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);
  useEffect(() => {
    if (contacts.error === null) {
      return;
    }
    toast.error(contacts.error);
    return;
  }, [contacts]);
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ marginBottom: 10 }}>Phonebook</h1>
      <ContactForm />

      <h2 style={{ marginBottom: 10 }}>Contacts</h2>
      <Filter />
      <ContactList />
      <Toaster />

      
    </div>
  );
};
