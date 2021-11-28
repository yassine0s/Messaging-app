import React, { useState,useCallback } from "react";
import "./SideBar.css";
import { Form, InputGroup } from "react-bootstrap";
import { Button } from "reactstrap";
import { useConversations } from "./Context/ConversationsProvider";

const MainConversation = () => {
  const [text, setText] = useState("");
  const setRef = useCallback(node =>{
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  const { sendMessage, selectedConversation } = useConversations();
  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((r) => r.Email),
      text
    );
    setText("");
  }
  
  return (
    <div className="bckgrnd">
      <div className="mxh">
        <div className="mxh2">
      <div className="d-flex flex-column flex-grow-1"  >
        <div className="flex-grow-1 overflow-auto">
          <div className="d-flex flex-column align-item-start justify-content-end px-3">
            {selectedConversation.messages.map((message, index) => {
              const lastMessage =
                selectedConversation.messages.length - 1 === index;
              return (
                <div
                  ref={lastMessage ? setRef : null}
                  key={index}
                  className={`my-1 d-flex flex-column ${
                    message.fromMe
                      ? "align-self-end align-items-end"
                      : "align-items-start"
                  }`}
                >
                  <div
                    className={`rounded px-2 py-1  ${
                      message.fromMe ? "bg-secondary text-white" : 'bg-dark text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                  <div
                    className={`text-muted small ${
                      message.fromMe ? "text-right" : ""
                    }`}
                  >
                    {message.fromMe ? "You" : message.senderName}
                  </div>
                </div>
              );
            })}
          </div>
          </div>

        </div>
      </div>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="m-2">
            <InputGroup>
              <Form.Control
                as="textarea"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ height: "38px", resize: "none" }}
              ></Form.Control>
              <span className="input-group-append height:100% ">
                <Button color="secondary" type="submit">
                  Send
                </Button>
              </span>
            </InputGroup>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default MainConversation;
