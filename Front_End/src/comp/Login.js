import React, { Component } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";

class Login extends Component {
  render() {
    return (
      <Form>
        <h1>
          <span className="LoginHeader">Login</span>
        </h1>
        <FormGroup className="Login-Form">
          <Label>Email</Label>
          <Input type="email"></Input>
          <Label>Password</Label>
          <Input type="password"></Input>
        </FormGroup>
        <Label className="Label">Forget Password ?</Label>
        <Label className="Label2">New here ?</Label>
        <Label className="Label3">Register</Label>
        <Button className=" login-button" outline color="secondary">
          Log in
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

export default Login;
