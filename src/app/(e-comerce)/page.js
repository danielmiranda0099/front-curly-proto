import { Container } from "@/components";
import { Button, Col } from "@/bootstrap";

export default function Home() {
  return (
    <main>
      <Container containerClass="mt-5">
        <Col>
          <h1>Bienvenido</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut
            augue purus. Vestibulum mattis quam purus, et lacinia arcu viverra
            eu. Etiam rutrum tellus ac sem lacinia, eu consequat sem dignissim.
          </p>
          <p>
            Curabitur suscipit rhoncus nunc. Suspendisse accumsan justo odio, id
            sollicitudin diam cursus at. Nulla facilisi. In ac quam volutpat,
            hendrerit nibh at, facilisis enim.
          </p>
          <Button>Empezar</Button>
        </Col>
      </Container>
    </main>
  );
}
