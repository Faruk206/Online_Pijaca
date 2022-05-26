import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

export default function DonjiNavbar() {
  return (
   <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">O nama?</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Objavi svoj proizvod</Nav.Link>
      <Nav.Link href="#features">Licence</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
  )
}
