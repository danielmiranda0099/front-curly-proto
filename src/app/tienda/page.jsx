import { Container } from "@/components";
import { Button, Col } from "@/bootstrap";

export default function TiendaPage() {
  return (
    <main>
      <Container containerClass="mt-5">
        <Col>
          <h1>Tienda</h1>
          <p>
            Aqui Va una Tienda
          </p>
          <Button>Comprar</Button>
        </Col>
      </Container>
    </main>
  );
}