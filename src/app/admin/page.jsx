"use client";
import { Container, Redirect } from "@/components";
import { Button, Col } from "@/bootstrap";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/context/Auth.context";
import { usePathname } from "next/navigation";

export default function AdminPage() {
  const { user, authTokens } = useContext(AuthContext);

  let [profile, setProfile] = useState([]);

  const pathName = usePathname();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      let response = await fetch("http://127.0.0.1:8000/products/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      });
      let data = await response.json();
      console.log(data);
      if (response.status === 200) {
        setProfile(data);
      } else if (response.statusText === "Unauthorized") {
        console.log("estoy Unauthorized");
      }
    } catch (error) {
      console.log("error inesérado, esperado");
    }
  };

  if (user?.is_manager) {
    return (
      <main>
        <Container row containerClass="mt-2">
          <Col>
            <h1>Admin</h1>
            <p>Aqui Va El Admin</p>
            <Button>Comprar</Button>
          </Col>
        </Container>
        <Container>
          {profile && <pre>{JSON.stringify(profile, null, 2)}</pre>}
        </Container>
        <Container>{pathName}</Container>

        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec metus diam. Cras et massa porta, consectetur magna vel,
            pellentesque arcu. Phasellus nec nisl vulputate, cursus justo
            tempor, sollicitudin odio. Curabitur consectetur diam sit amet lacus
            ultricies congue. In hac habitasse platea dictumst. Proin cursus
            nibh quis aliquam rhoncus. Suspendisse congue sollicitudin
            facilisis. Donec vulputate aliquet lorem vitae sollicitudin. Donec
            pharetra euismod gravida.
          </p>
          <p>
            In egestas iaculis quam, sit amet tempus turpis gravida in. Duis
            pretium nulla a augue gravida aliquet. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse justo ex, interdum et risus id, congue euismod arcu.
            Vestibulum a ligula vel sem placerat viverra non at dui. Proin
            iaculis convallis porta. Vivamus eu turpis ullamcorper, tincidunt
            felis finibus, pellentesque erat. Aliquam eget ex nec metus auctor
            posuere.
          </p>
        </Container>
        <Container>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            nec metus diam. Cras et massa porta, consectetur magna vel,
            pellentesque arcu. Phasellus nec nisl vulputate, cursus justo
            tempor, sollicitudin odio. Curabitur consectetur diam sit amet lacus
            ultricies congue. In hac habitasse platea dictumst. Proin cursus
            nibh quis aliquam rhoncus. Suspendisse congue sollicitudin
            facilisis. Donec vulputate aliquet lorem vitae sollicitudin. Donec
            pharetra euismod gravida.
          </p>
          <p>
            In egestas iaculis quam, sit amet tempus turpis gravida in. Duis
            pretium nulla a augue gravida aliquet. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Suspendisse justo ex, interdum et risus id, congue euismod arcu.
            Vestibulum a ligula vel sem placerat viverra non at dui. Proin
            iaculis convallis porta. Vivamus eu turpis ullamcorper, tincidunt
            felis finibus, pellentesque erat. Aliquam eget ex nec metus auctor
            posuere.
          </p>
        </Container>
      </main>
    );
  }

  return (
    <Container row>
      <Redirect />
    </Container>
  );
}
