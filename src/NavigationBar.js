import React, { useState } from 'react';
import { Navbar, Nav, Button, Modal } from 'react-bootstrap';
import Login from './Login';
import Signup from './Signup';

function NavigationBar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Navbar.Brand href="#home">FoodieHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Button variant="outline-primary" className="me-2" onClick={() => setShowLogin(true)}>
              Login
            </Button>
            <Button variant="primary" onClick={() => setShowSignup(true)}>
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Login Modal */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to FoodieHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>

      {/* Signup Modal */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up for FoodieHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signup />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavigationBar;
