import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar fixed="top" data-bs-theme="light">
      <Nav className="me-auto fw-bold w-100 justify-content-around">
        <Nav.Link href="#">Présentation</Nav.Link>
        <Nav.Link href="#">Projets</Nav.Link>
        <Nav.Link href="#">Parcours</Nav.Link>
        <Nav.Link href="#">Compétences</Nav.Link>
        <Nav.Link href="#">Loisirs</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
