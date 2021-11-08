import React, { useRef, useState } from "react";
import { Modal, Form } from "react-bootstrap";
import { Button, Input } from "reactstrap";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./SideBar.css";
import {useContacts} from './Context/ContactsProvider'
const NewContactModal = ({ closeModal }) => {
  const EmailRef = useRef();
  const NameRef = useRef();
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
const {createContact}= useContacts();
  const handleSubmit = () => {
    Axios.post("http://localhost:3001/NewContact", {
      Email: Email,
      Name: Name,
    }).then((response) => {
      if (response.data.message) {
        toast.error("Cannot find user", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: false,
        });
      } else {
         createContact(Email,Name)
        closeModal();
      }
    });
  };

  return (
    <>
      <Modal.Header className="cardStyle" closeButton>
        Create Contact
      </Modal.Header>
      <Modal.Body className="box">
        <Form>
          <Form.Group>
            <Form.Label className="txt">Email</Form.Label>
            <Input
              type="text"
              ref={EmailRef}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="txt">Name</Form.Label>
            <Input
              type="text"
              ref={NameRef}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Button
            outline
            color="secondary"
            className="mt-2"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;
