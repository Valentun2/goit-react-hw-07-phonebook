import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetContacts } from 'redux/operations';

import { filterContactArr, getContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const contactName = useSelector(filterContactArr);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetContacts());
  }, [dispatch]);

  const filterArr = contacts.arrContact.filter(contact =>
    contact.name
      .toLocaleLowerCase()
      .trim()
      .includes(contactName.toLocaleLowerCase().trim())
  );

  return (
    <ul>
      {(contacts.isLoading && <p>Loading...</p>) ||
        filterArr.map(item => {
          return (
            <ContactItem
              name={item.name}
              phone={item.number}
              key={item.id}
              id={item.id}
            />
          );
        })}
    </ul>
  );
};
