import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/styles.css'

function NavigationBar() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Home Icon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/About" className="nav-link-hover-underline">About</Nav.Link>
            <Nav.Link href="/Project" className="nav-link-hover-underline">Project</Nav.Link>
            <Nav.Link href="/Contact" className="nav-link-hover-underline">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;