import Link from "next/link";
import { Nav } from "@/bootstrap";

export function NavbarWithOutLogin() {
  return (
    <>
      <Nav.Link as={Link} href="/auth/login">
        Sing in
      </Nav.Link>
      <Nav.Link as={Link} href="/auth/register">
        Register
      </Nav.Link>
    </>
  );
}
