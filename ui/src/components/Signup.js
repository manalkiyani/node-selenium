import React, { useState } from "react";

import {useNavigate} from 'react-router-dom'

import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import "./Login.css";

export default function SignUp() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

    const navigate= useNavigate()

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {
    console.log('here')
    event.preventDefault();
    if (email =="manal@hotmail.com" && password=="1234"){
         console.log('good')
        navigate('/dashboard')
       
    }
    

  }

  return (

    <div className="Login">

      <Form >

        <Form.Group size="lg" controlId="email">

          <Form.Label>Email</Form.Label>

          <Form.Control

            autoFocus

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button onClick={handleSubmit} style={{marginTop:'20px'}}block size="lg" type="submit" disabled={!validateForm()}>

          SignUp

        </Button>

      </Form>

    </div>

  );

}