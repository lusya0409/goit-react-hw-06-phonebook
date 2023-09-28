import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('saved-contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export const Phonebook = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('saved-contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const hasContact = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...newContact },
    ]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };
  const filteredContacts = contacts.filter(({ name }) => {
    return name.toLowerCase().includes(filter.toLowerCase());
  });

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <h2>Contacts</h2>
      <ContactList items={filteredContacts} onDelete={deleteContact} />
      <Filter filter={filter} onChangeFilter={changeFilter} />
    </div>
  );
};
