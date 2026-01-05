import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container id="contact" className="my-5">
      <h2 className="text-center mb-4">Contact Me</h2>

      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="tel" placeholder="Contact Number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact
