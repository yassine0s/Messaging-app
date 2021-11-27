import React, { useContext, useState,useCallback } from "react";
import useLocalStorage from "../UseLocalStorage";
import { useContacts } from "./ContactsProvider";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSocket } from "./socketProvider";

const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {
  const location = useLocation();

  useEffect(() => {}, [location]);
  const Email = location.state.detail;
  console.log(Email)
  const [conversations, setConversation] = useLocalStorage("conversations", []);
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0);
  const { contacts } = useContacts();
  const socket = useSocket()
  function createConversation(recipients) {
    setConversation((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }
  const addMessageToConversation=useCallback(({ recipients, text, sender }) =>{
    setConversation(prevConversations => {
      let madeChange = false;
      const newMessage = { sender, text };
      const newConversations = prevConversations.map(conversation => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true;
          return {
            ...conversation,
            messages: [...conversation.messages, newMessage]
          };
        }
        return conversation;
      });
      if (madeChange) {
        return newConversations;
      } else {
        return [...prevConversations, { recipients, messages: [newMessage] }];
      }
    });
  },[setConversation])
  useEffect(() => {
    if (socket == null) return

    socket.on('receive-message', addMessageToConversation)

    return () => socket.off('receive-message')
  }, [socket, addMessageToConversation])

  function sendMessage(recipients, text) {
    socket.emit('send-message', { recipients, text })
    addMessageToConversation({ recipients, text, sender: Email });
  }
  const formattedConversations = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.Email === recipient;
      });
      const name = (contact && contact.Name) || recipient;
      return { Email: recipient, name };
    });
    const messages = conversation.messages.map(message => {
      const contact = contacts.find(contact => {
        return contact.Email === message.sender;
      });
      const name = (contact && contact.name) || message.sender;
      const fromMe = Email === message.sender;
      return { ...message, senderName: name, fromMe };
    });
    const selected = index === selectedConversationIndex;
    return { ...conversation, messages, recipients, selected };
  });
  const value = {
    conversations: formattedConversations,
    selectedConversation: formattedConversations[selectedConversationIndex],
    sendMessage,
    selectConversationIndex: setSelectedConversationIndex,
    createConversation,
  };
  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}
function arrayEquality(a, b) {
  if (a.length !== b.length) return false;

  a.sort();
  b.sort();

  return a.every((element, index) => {
    return element === b[index];
  });
}
