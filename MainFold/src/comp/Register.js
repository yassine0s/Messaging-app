import React, { useState } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import Axios from 'axios' 
import {  useHistory } from "react-router-dom";

function Register() {
  const [nameReg, setnameReg] = useState("");
  const [emailReg, setemailReg] = useState("");
  const [PasswordReg, setPasswordReg] = useState("");
  const history = useHistory();

  const register = () => {
    Axios
      .post('http://localhost:3001/register', {
        Name : nameReg,
        Email: emailReg,
        Password: PasswordReg,
      })
        history.push("/");
   
  };
    return (
      <Form>
        <h1>
          <span className="LoginHeader">Register</span>
        </h1>
        <FormGroup className="Login-Form">
          <Label>Full Name</Label>
          <Input type="text" onChange={(e) => {
            setnameReg(e.target.value);
          }}></Input>
          <Label>Email</Label>
          <Input type="email"  onChange={(e) => {
            setemailReg(e.target.value);
          }}></Input>
          <Label>Password</Label>
          <Input type="password"  onChange={(e) => {
            setPasswordReg(e.target.value);
          }}></Input>
        </FormGroup>
        <Button className=" Register-button" outline color="secondary" onClick = {register}> 
          Register
        </Button>
        <div className="social-container">
          <FacebookLoginButton onClick={() => alert("Hello")}>
            <span></span>
          </FacebookLoginButton>
          <GoogleLoginButton onClick={() => alert("Hello")}>
            <span></span>
          </GoogleLoginButton>
          <TwitterLoginButton onClick={() => alert("Hello")}>
            <span></span>
          </TwitterLoginButton>
        </div>
      </Form>
    );
  
}

export default Register;
