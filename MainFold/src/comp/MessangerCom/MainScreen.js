import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar"
import "./SideBar.css";

function MainScreen() { 
  const location = useLocation();

  useEffect(() => {
    }, [location]);

  return (<div className ="flex">
    <SideBar Email = {location.state.detail}/>
    </div> ) 
}
export default MainScreen;
