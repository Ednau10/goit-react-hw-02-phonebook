import React, { Component } from 'react';
import { List, Button } from './ContactItemStyled';

class ItemList extends Component {
  render() {
    const { contact, onDelete } = this.props;
    return (
      <div>
     <List>
        <span>{contact.name}: {contact.number}</span>
        <Button onClick={onDelete}>Delete</Button>
      </List>
      </div>
    );
  }
}

export default ItemList;
