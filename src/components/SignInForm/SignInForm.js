import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";

import "./SignInForm.scss";

export default function SignInForm() {
  const [formData, setFormData] = useState(initialFormValue());
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-form">
      <h2>Entrar</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Form.Control
            type="email"
            name="email"
            placeholder="Correo electronico"
            defaultValue={formData.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            defaultValue={formData.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Iniciar Session
        </Button>
      </Form>
    </div>
  );
}

function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
