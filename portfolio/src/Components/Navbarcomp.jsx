import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">MyPortfolio</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
