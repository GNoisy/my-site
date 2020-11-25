import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./style.css";

export default class Hero extends Component {
    render() {
      return (
        <Jumbotron fluid className="mb-0" id="HeroBG">
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Container>
        </Jumbotron>
      );
    }
  }