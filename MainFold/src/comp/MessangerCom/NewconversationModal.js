import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Button } from "reactstrap";
import "./SideBar.css";
import { useContacts } from "./Context/ContactsProvider";
import { useConversations } from "./Context/ConversationsProvider";
const NewConversationModal = ({ closeModal }) => {
  const [selectedContactEmails, setSelectedContactsEmails] = useState([]);
  const { contacts } = useContacts();
  const { createConversation } = useConversations();
  function handleSubmit(e) {
    e.preventDefault();
    createConversation(selectedContactEmails);
    closeModal();
  }
  function handleCheckboxChange(contactEmail) {
    setSelectedContactsEmails((prevSelectedContactEmails) => {
      if (prevSelectedContactEmails.includes(contactEmail)) {
        return prevSelectedContactEmails.filter((prevEmail) => {
          return contactEmail === prevEmail;
        });
      } else {
        return [...prevSelectedContactEmails, contactEmail];
      }
    });
  }
  return (
    <>
      <Modal.Header className="cardStyle" closeButton>
        Create Conversation
      </Modal.Header>
      <Modal.Body className="box2">
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlEmail={contact.Email} key={contact.Email}>
              <Form.Check className ="txt"
                type="checkbox"
                value={selectedContactEmails.includes(contact.Email)}
                label={contact.Name}
                onChange={() => handleCheckboxChange(contact.Email)}
              />
            </Form.Group>
          ))}
          <Button
            outline
            color="secondary"
            className="mt-2"
            
          >
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewConversationModal;
