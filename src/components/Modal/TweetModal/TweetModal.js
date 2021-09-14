import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { Close } from "../../../utils/Icons";

import "./TweetModal.scss";

export default function TweetModal(props) {
  const { show, setShow } = props;

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
      <Modal.Body>.......</Modal.Body>
    </Modal>
  );
}
