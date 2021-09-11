import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";

import "./EditForm.scss";

export default function EditForm(props) {
  console.log(props);
  const { user, setShowModal } = props;
  const [formData, setFormData] = useState(initialValue(user));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Editando usuario...");
  };

  return (
    <div className="edit-user-form">
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                name="nombre"
                defaultValue={formData.nombre}
              />
            </Col>
            <Col>
              <Form.Label></Form.Label>
              <Form.Control
                type="text"
                placeholder="Apellidos"
                name="apellidos"
                defaultValue={formData.apellidos}
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            as="textarea"
            row="3"
            placeholder="Agrega tu biografia"
            type="text"
            name="biografia"
            defaultValue={formData.biografia}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            placeholder="Sitio Web"
            name="sitioWeb"
            defaultValue={formData.sitioWeb}
          />
          <Form.Label></Form.Label>
        </Form.Group>
        <Form.Group>
          <DatePicker
            placeholder="Fecha de Nacimiento"
            locale={es}
            selected={new Date(formData.fechaNacimiento)}
          />
        </Form.Group>
        <Button className="btn-submit" variant="primary" type="submit">
          Actualizar
        </Button>
      </Form>
    </div>
  );
}

function initialValue(user) {
  return {
    nombre: user.nombre || "",
    apellidos: user.apellidos || "",
    biografia: user.biografia || "",
    ubicacion: user.ubicacion || "",
    sitioWeb: user.sitioWeb || "",
    fechaNacimiento: user.fechaNacimiento || "",
  };
}
