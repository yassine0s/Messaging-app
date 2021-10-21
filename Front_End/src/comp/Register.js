import React, { Component } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";

class Register extends Component {
  render() {
    return (
      <Form>
        <h1>
          <span className="LoginHeader">Register</span>
        </h1>
        <FormGroup className="Login-Form">
          <Label>Full Name</Label>
          <Input type="text"></Input>
          <Label>Email</Label>
          <Input type="email"></Input>
          <Label>Password</Label>
          <Input type="password"></Input>
        </FormGroup>
        <Button className=" Register-button" outline color="secondary">
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
}

export default Register;
