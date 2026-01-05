import { Container, Card, Row, Col } from "react-bootstrap"

function Projects() {
  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center mb-4">My Projects</h2>

      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Portfolio Website</Card.Title>
              <Card.Text>
                React + Bootstrap personal portfolio
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>E-commerce App</Card.Title>
              <Card.Text>
                Shopping app using React
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              <Card.Text>
                Admin panel with charts
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Projects
