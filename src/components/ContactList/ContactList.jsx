import React, { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';
import Filter from '../Filter/Filter';

import { Title,List,ItemList } from './ContactListStyled';

class ContactsList extends Component {
  render() {
    const { contacts, filter, onFilterChange, onContactDelete } = this.props;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <Title> Contacts: </Title>
        <Filter value={filter} onChange={onFilterChange} />

        <List>
          {filteredContacts.map(contact => (
            <ItemList key={contact.id}>
              <ContactItem
                contact={contact}
                onDelete={() => onContactDelete(contact.id)}
              />
            </ItemList>
          ))}
        </List>
      </div>
    );
  }
}

export default ContactsList;
