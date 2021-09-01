import React from "react";
import { Form, Button, Spinner } from "react-bootstrap";

import "./SignInForm.scss";

export default function SignInForm() {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Login...");
  };

  return (
    <div className="sign-in-form">
      <h2>Entrar</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control type="email" placeholder="Correo electronico" />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
        Iniciar Session
      </Button>
    </div>
  );
}
