import React from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import { Title, Container } from './AppStyled';

export const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm  />
    </Container>
  );
};
