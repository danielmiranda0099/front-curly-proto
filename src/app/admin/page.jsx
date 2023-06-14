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
    getProducts();
  }, []);

  const getProducts = async () => {
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
      </main>
    );
  }

  return (
    <Container row>
      <Redirect />
    </Container>
  );
}
