import React, { useState, useEffect } from 'react';
import { getRandomId } from './random-id';
import Head from './title/head';
import Section from './title/section-title';
import Contacts from './contacts/contacts';
import SearchContact from './SearchContact/SearchContact';
import AddContactForm from './add-contact/add-contact';
import { saveToLocalStorage, loadContacts } from '../local-storage/local-storage';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const KEYlocalStorage = 'savedContacts';

  useEffect(() => {
    const savedContacts = loadContacts(KEYlocalStorage);
    if (savedContacts && savedContacts.length > 0) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage(KEYlocalStorage, contacts);
  }, [contacts]);

  const addContact = (name, number) => {
    const idContact = getRandomId();
    const dataFields = { name: name, number: number, id: idContact };
    const isContact = contacts.find(contact => contact.name === dataFields.name);
    !isContact ?
      setContacts(prevContacts => [...prevContacts, dataFields])
      : alert(`${name} is already in contacts`);
  };

  const onDeleteContact = id => setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));

  const onFilteringInput = e => {
    const searchValue = e.target.value.trim();
    setFilter(searchValue);
  };

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className='container'>
      <Head headTitle='Phonebook' />
      <AddContactForm addContact={addContact} />
      <Section title='Contacts'>
        {contacts.length > 0 && (<SearchContact
          handleSearchInput={onFilteringInput}
          searchTitle='Find contacts by name'
        />)}
        {contacts.length > 0 ? (<Contacts
          arrayContacts={filteredContacts}
          onDeleteContact={onDeleteContact}
        />) : (<p className='text-message'>The contact list is empty.</p>)}
      </Section>
    </div>
  );
};

export default App;