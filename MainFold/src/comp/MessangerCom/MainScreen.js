import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import "./SideBar.css";
import MainConversation from "./MainConversation"
import {useConversations} from "./Context/ConversationsProvider"
function MainScreen() {
  const location = useLocation();

  useEffect(() => {}, [location]);
const {selectedConversation} = useConversations()
  return (
    <div className="flex  ">
      <SideBar Email={location.state.detail} />
      {selectedConversation && <MainConversation></MainConversation>}
      
    </div>
    
  );
}
export default MainScreen;
