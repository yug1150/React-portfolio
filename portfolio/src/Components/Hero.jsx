import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-primary text-white pt-5 mt-5">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <h5>Hello, my name is</h5>
            <h1>Yug Solanki</h1>
            <p>React JS Developer | Frontend Specialist</p>
            <Button variant="light">Hire Me</Button>
          </Col>
          <Col md={6}>
            <img
              src="https://via.placeholder.com/350"
              className="img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
