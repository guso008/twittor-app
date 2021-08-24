import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUsers,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import BasicModal from "../../components/Modal/BasicModal/BasicModal";
import LogoTwittor from "../../assets/png/logo.png";
import LogoWhiteTwitter from "../../assets/png/logo-white.png";

import "./SignInSignUp.scss";

export default function SignInSignUp() {
  const [showModal, setShowModal] = useState(true);
  const [contentModal, setContentModal] = useState(null);
  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RightComponent />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        <div>
          <h2>Modal Content</h2>
        </div>
      </BasicModal>
    </>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      {/*<img src={LogoTwittor} alt="Twittor" />*/}
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUsers} />
          Entérate de qué está hablando la gente.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Únete a la conversación.
        </h2>
      </div>
    </Col>
  );
}

function RightComponent() {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoWhiteTwitter} alt="Twittor" />
        <h2>Mira lo que está pasando en el mundo en este momento</h2>
        <h3>Unete a Twittor hoy mismo</h3>
        <Button variant="primary">Regístrate</Button>
        <Button variant="outline-primary">Iniciar Sessión</Button>
      </div>
    </Col>
  );
}
