"use client";
import { Button, Col, Form } from "@/bootstrap";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth.context";
import { Container } from "@/components";

export default function LoginPage() {
  let { loginUser, user } = useContext(AuthContext);

  const loginHandle = (event) => {
    event.preventDefault();

    loginUser(
        {
            email: event.target.email.value,
            password: event.target.password.value,
        }
    );
  };

  return (
    <Container row containerClass="mt-5" rowClass="justify-content-md-center">
      <Col md={4}>
        <Form onSubmit={loginHandle}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
}
