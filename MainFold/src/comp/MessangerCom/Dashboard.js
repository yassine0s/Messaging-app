import React from 'react';
import MainScreen from "./MainScreen";
import { ContactsProvider } from "./Context/ContactsProvider";
import { ConversationsProvider } from "./Context/ConversationsProvider";
import { SocketProvider } from "./Context/socketProvider";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Dashboard = () => {
        const location = useLocation();
      
        useEffect(() => {}, [location]);

    return (
        <SocketProvider Email={location.state.detail}>
            <ContactsProvider>
              <ConversationsProvider>
                <MainScreen />
              </ConversationsProvider>
            </ContactsProvider>
          </SocketProvider>
    );
};
    
export default Dashboard;