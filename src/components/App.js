import React from 'react';
import Head from './title/head';
import Section from './title/section-title';
import Contacts from './contacts/contacts';
import SearchContact from './SearchContact/SearchContact';
import AddContactForm from './add-contact/add-contact';

export const App = () => {

  return (
    <div className='container'>
      <Head headTitle='Phonebook' />
      <AddContactForm />
      <Section title='Contacts'>
        <SearchContact
          searchTitle='Find contacts by name' />
        <Contacts />
      </Section>
    </div>
  );

}
