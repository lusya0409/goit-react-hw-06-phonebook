// import React, { Component } from 'react';
// import { ContactForm } from './src/components/Phonebook/ContactForm/ContactForm';
// import { ContactList } from './src/components/Phonebook/ContactList/ContactList';
// import { Filter } from './src/components/Phonebook/Filter/Filter';
// import { nanoid } from 'nanoid';
// export class Phonebook extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const savedContacts = localStorage.getItem('saved-contacts');
//     if (savedContacts !== null) {
//       this.setState({
//         contacts: JSON.parse(savedContacts),
//       });
//     }
//   }
//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts)
//       localStorage.setItem(
//         'saved-contacts',
//         JSON.stringify(this.state.contacts)
//       );
//   }

// addContact = newContact => {
//   const hasContact = this.state.contacts.find(
//     ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
//   );
//   if (hasContact) {
//     alert(`${newContact.name} is already in contacts`);
//     return;
//   }

//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
//   }));
// };

// deleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//   }));
// };

// getFilteredContacts = () => {
//   const { contacts, filter } = this.state;

//   return contacts.filter(({ name }) => {
//     return name.toLowerCase().includes(filter.toLowerCase());
//   });
// };
// changeFilter = newFilter => {
//   this.setState({
//     filter: newFilter,
//   });
// };

// render() {
// const { filter } = this.state;
// const filteredContacts = this.getFilteredContacts();

// return (
//   <div>
//     <h1>Phonebook</h1>
//     <ContactForm onAdd={this.addContact} />
//     <h2>Contacts</h2>
//     <ContactList items={filteredContacts} onDelete={this.deleteContact} />
//     <Filter filter={filter} onChangeFilter={this.changeFilter} />
//   </div>
// );
//   }
// }
