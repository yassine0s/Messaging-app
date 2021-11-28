import React, { useState } from "react";
import "./Login.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";
import { Link } from "react-router-dom";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
toast.configure();

function Login() {
  const history = useHistory();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      Email: Email,
      Password: Password,
    }).then((response) => {
      if (response.data.message) {
        toast.error("Wrong Email or Password", {
          position: toast.POSITION.BOTTOM_CENTER,
          autoClose: false,
        });
      } else {
        history.push({
          pathname: "/Main_Page",
          state: { detail: Email },

        });
       
      }
    });
  };
  return (
    <Form>
      <h1>
        <span className="LoginHeader">Login</span>
      </h1>
      <FormGroup className="Login-Form">
        <Label>Email</Label>
        <Input
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></Input>
        <Label>Password</Label>
        <Input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
      </FormGroup>
      <Label className="Label">Forget Password ?</Label>
      <Label className="Label2">New here ?</Label>
      <Label>
        <Link to="/register" className="Label3">
          Register
        </Link>
      </Label>
      <Button
        className="login-button"
        outline
        color="secondary"
        onClick={login}
      >
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

export default Login;
