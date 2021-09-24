import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

class NavClass extends Component {

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/tasks'>Tasks</Nav.Link>
              <Nav.Link href='/weather'>Weather</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link eventKey={2} href="https://github.com/Drag0s98/toDo_react">
                GitHub
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default NavClass;

/*
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/tasks'>Tasks</Link></li>
          <li><Link to='/weather'>Weather</Link></li>
        </ul>
      </nav>
 */