import { Item, List, ButtonDlt } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  console.log(contacts, filter);
  return contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts, filter);

  const filteredContacts = getFilteredContacts(contacts, filter);

  const dispatch = useDispatch();

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}</span> <span>{number}</span>
          <ButtonDlt
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ButtonDlt>
        </Item>
      ))}
    </List>
  );
};
