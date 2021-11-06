import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";
import "./SideBar.css";
import Conversation from "./Conversation";
import Contacts from "./Contacts";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Conversation_Key = "Conversation";
const Contact_Key = "Contacts";

const SideBar = (Email) => {
  const [activeKey, setActiveKey] = useState(Conversation_Key);
  return (
    <div>
    <div ><Container >
  <Row >
    <Col >
  image
    </Col>
    <Col xs={6} >
     Your Email: 
    </Col>
  </Row>
  
  
    
</Container></div>

    <div className ="Navb" >
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey} >
        <Nav variant="tabs" className = "justify-content-center" >
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
        <Tab.Content className ="border">
            <Tab.Pane eventKey = {Conversation_Key}>
                <Conversation />
            </Tab.Pane>
            <Tab.Pane eventKey = {Contact_Key}>
                <Contacts/>
            </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
    </div>

  );
};

export default SideBar;
