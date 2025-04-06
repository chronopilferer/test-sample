import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { FaHome } from "react-icons/fa";

import '../styles/styles.css'

function NavigationBar() {
  return (
    <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
      <Container className='nav-container'>
        <Nav.Link as={Link} to="/">
          <FaHome className="nav-icon-link" />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/About" className="nav-link-hover-underline">About</Nav.Link>
            <Nav.Link as={Link} to="/Project" className="nav-link-hover-underline">Project</Nav.Link>
            <Nav.Link as={Link} to="/Contact" className="nav-link-hover-underline">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;