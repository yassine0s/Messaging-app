import React from "react";
import "./popup.css"
const Settings = props => {
  return (
    <div className="popup-box">
      <div className="boxf">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};
 
export default Settings;