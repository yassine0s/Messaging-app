import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from './Context/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.Email}>
          {contact.Name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}