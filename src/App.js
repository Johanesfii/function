import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./komponen/Home"
import Contact from "./komponen/Contact";

function App() {
  return (
    <BrowserRouter>
    <div>
      <>
      <Navbar bg="primary" variant="dark">
        <Container>
        
          <Nav className="me-auto">
            <Nav.Link as={Link}to="/">Home</Nav.Link>
            <Nav.Link as={Link}to="/contact">Contact</Nav.Link>
  
     
          </Nav>
        </Container>
      </Navbar>
      </>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </div>
    </BrowserRouter>

  );
}

export default App;
