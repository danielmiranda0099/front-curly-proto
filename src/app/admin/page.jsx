'use client';
import { Container, Redirect } from "@/components";
import { Button, Col } from "@/bootstrap";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth.context";

export default function AdminPage() {
  const {user} = useContext(AuthContext);
  
  if(user){
    return (
    <main>
      <Container containerClass="mt-5">
        <Col>
          <h1>Admin</h1>
          <p>Aqui Va El Admin</p>
          <Button>Comprar</Button>
        </Col>
      </Container>
    </main>
  );
    }

    return(
        <Container row>
            <Redirect />
        </Container>
    )
}
