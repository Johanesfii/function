import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../style/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(props) {
  return (

    <Navbar className='bg' variant="dark">
    <Container>
      <Navbar.Brand href="#home">News</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
           

    

  )
}
