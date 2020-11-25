import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
require("./style.css");

export default class Header extends Component {
  render() {
    return (
      // <nav className='main-nav'>
      //     <div>
      //     <h1>Giovanni Noisy</h1>
      //     </div>
      //     <div>
      //         <ul>
      //             <li>About</li>
      //             <li>Portfolio</li>
      //             <li>Contact</li>
      //         </ul>
      //     </div>
      // </nav>
      <Navbar
        className="border-bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">Giovanni Noisy</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="border-0"
        />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
