"use client";
import { useContext, useState } from "react";
import { Button, Col, Form } from "@/bootstrap";
import { Container } from "@/components";
import { register } from "@/utils/register";
import { AuthContext } from "@/context/Auth.context";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  let { loginUser } = useContext(AuthContext);

  const handleRegister = async (event) => {
    try {
      event.preventDefault();

      const data = {
        name: username,
        last_name: lastName,
        email: email,
        password: password,
        password2: password2,
      };

      let response = await register(data);

      if (response.ok) {
        console.log("todo OK: ", await response.json());
        loginUser({email, password});
      } else {
        console.log("error: ", await response.json());
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <Container row rowClass="justify-content-md-center">
      <Col md={4}>
        <h4>Registro de Usuario</h4>
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formUsername">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>Apellido:</Form.Label>
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Confirme Su Contraseña:</Form.Label>
            <Form.Control
              type="password"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </Form>
      </Col>
    </Container>
  );
}
