import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LogoTwittor from "../../assets/png/logo.png";
import LogoWhiteTwitter from "../../assets/png/logo-white.png";
import "./SignInSignUp.scss"


export default function SignInSignUp() {
    return (
        <Container className="signin-signup" fluid>
            <Row>
                <LeftComponent />
                <RightComponent />
            </Row>
        </Container>
    )
}

function LeftComponent() {
    return (
        <Col className="signin-signup__left" xs={6}>
            <img src={LogoTwittor} alt="Twittor" />
            <div>
                <h2>- Sigue lo que te interesa</h2>
                <h2>- Enterate lo que está pasando</h2>
                <h2>- Unete a la conversación</h2>
            </div>
        </Col>
    );
}


function RightComponent() {
    return (
        <Col className="signin-signup__right">
            <h2>RightComponent...</h2>
        </Col>
    );
}