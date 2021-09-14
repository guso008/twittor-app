import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Close } from "../../../utils/Icons";

import "./TweetModal.scss";

export default function TweetModal(props) {
  const { show, setShow } = props;
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    console.log("Enviando Tweet!!");
  };

  return (
    <Modal
      className="tweet-modal"
      show={show}
      onHide={() => setShow(false)}
      centered
      size="lg"
    >
      <Modal.Header>
        <Modal.Title>
          <Close onClick={() => setShow(false)} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Control
            as="textarea"
            rows="6"
            placeholder="¿Que estás pensando?"
          />
          <span className="count">{message.length}</span>
          <Button type="submit">Twittoar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
