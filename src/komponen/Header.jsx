import React from 'react';
import { Nav,Container,Navbar } from 'react-bootstrap'
import {Link, Route, Routes} from 'react-router-dom'
import '../style/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header(props) {
  return (
<Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    

  )
}
