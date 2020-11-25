import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

export default class Hero extends Component {
    render() {
      return (
        <Jumbotron fluid className="mb-0" id="HeroBG">
            <Container>
                <Row>
                    <Col md={3}></Col>
                    <Col md={6}>
                        <p className="text-center mt-0" id="my-name">Hello, I'm Giovanni Noisy.<br />I'm a Graphic Designer + Web Developer.</p>
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </Container>
        </Jumbotron>
      );
    }
  }