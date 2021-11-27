import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import "./SideBar.css";
import MainConversation from "./MainConversation"
import {useConversations} from "./Context/ConversationsProvider"
import { SocketProvider } from "./Context/socketProvider";
function MainScreen() {
  const location = useLocation();

  useEffect(() => {}, [location]);
const {selectedConversation} = useConversations()
  return (
    <div className="flex " >
      <SocketProvider Email={location.state.detail}>
      <SideBar Email={location.state.detail} />
      {selectedConversation && <MainConversation></MainConversation>}
      </SocketProvider>

    </div>
    
  );
}
export default MainScreen;
