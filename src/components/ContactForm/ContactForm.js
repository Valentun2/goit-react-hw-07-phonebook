import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import toast, { Toaster } from 'react-hot-toast';
import { fetchAddContact } from 'redux/operations';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const isUser = contacts.arrContact.find(
      ({ name }) => name === evt.target.name.value
    );
    if (isUser) {
      toast.error(`${evt.target.name.value} is alredy in contacts`);
      return;
    }

    const arr = {
      name: evt.target.name.value,
      number: evt.target.number.value,
    };

    dispatch(fetchAddContact(arr));
    evt.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input type="text" name="name" required pattern="^[a-zA-Z]+$" />
      </label>
      <label>
        Number
        <input type="tel" name="number" required pattern="^[ 0-9]+$" />
      </label>
      <button className={styles.formButton}>add contact</button>
      <Toaster />
    </form>
  );
};
