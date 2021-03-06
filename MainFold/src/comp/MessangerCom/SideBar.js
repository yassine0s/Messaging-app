import React, { useState } from "react";
import { Tab, Nav, Modal } from "react-bootstrap";
import "./SideBar.css";
import Conversation from "./Conversation";
import Contacts from "./Contacts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "antd/dist/antd.css";
import { Button } from "reactstrap";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewconversationModal";

import { Avatar } from "antd";
const Conversation_Key = "Conversation";
const Contact_Key = "Contacts";

const SideBar = ({ Email }) => {
  const [activeKey, setActiveKey] = useState(Conversation_Key);
  const conversationOpen = activeKey === Conversation_Key;
  const [modalOpen, setModalOpen] = useState(false);
  function closeModal() {
    setModalOpen(false);
  }
  return (
    <div>
      <div>
        <Container>
          <Row>
            <Col className=" SideBar">
              <Avatar size={43} icon="" />
            </Col>
            <Col className=" SideBar" style={{ color: "black" }}>
              <span>Your Email: {Email} </span>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="Navb">
        <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
          <Nav variant="tabs" className="justify-content-center">
            <Nav.Item className="SideBar">
              <Nav.Link eventKey={Conversation_Key} className="SideBar">
                Converstation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="SideBar">
              <Nav.Link eventKey={Contact_Key} className="SideBar">
                Contacts
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content className="border">
            <Tab.Pane eventKey={Conversation_Key}>
              <Conversation />
            </Tab.Pane>
            <Tab.Pane eventKey={Contact_Key}>
              <Contacts />
            </Tab.Pane>
          </Tab.Content>
          <Button outline color="secondary" onClick={() => setModalOpen(true)}>
            New {conversationOpen ? "conversation" : "Contact"}{" "}
          </Button>
        </Tab.Container>
        <Modal show={modalOpen} onHide={closeModal}>
          {conversationOpen ? (
            <NewConversationModal closeModal={closeModal} />
          ) : (
            <NewContactModal closeModal={closeModal} />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default SideBar;
