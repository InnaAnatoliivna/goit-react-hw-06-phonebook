import React from 'react';
import { getRandomId } from './random-id';
import Head from './title/head';
import Section from './title/section-title';
import Contacts from './contacts/contacts';
import SearchContact from './SearchContact/SearchContact';
import AddContactForm from './add-contact/add-contact';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/reducers/contactsSlice';
import { updateFilter } from 'redux/reducers/filterSlice';
import { selectorContacts, selectorFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const dispatch = useDispatch();

  console.log(contacts)

  const addNewContact = (name, number) => {
    const idContact = getRandomId();
    const dataFields = { name: name, number: number, id: idContact };
    const isContact = contacts.find(contact => contact.name === dataFields.name);
    !isContact ?
      dispatch(addContact(dataFields))
      : alert(`${name} is already in contacts`);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onFilteringInput = e => {
    const searchValue = e.target.value.trim();
    if (searchValue) {
      dispatch(updateFilter(searchValue));
    }
  };

  const filteredContacts = () => {
    console.log(filter)
    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
    } else {
      return contacts;
    }
  }

  return (
    <div className='container'>
      <Head headTitle='Phonebook' />
      <AddContactForm addContact={addNewContact} value={filter} />
      <Section title='Contacts'>
        {contacts.length > 0 && (<SearchContact
          handleSearchInput={onFilteringInput}
          searchTitle='Find contacts by name'
        />)}
        {contacts.length > 0 ? (<Contacts
          arrayContacts={filteredContacts()}
          onDeleteContact={onDeleteContact}
        />) : (<p className='text-message'>The contact list is empty.</p>)}
      </Section>
    </div>
  );
}
