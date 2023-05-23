import Link from "next/link";
import { Nav, NavDropdown } from "@/bootstrap";
import { IconAvatar } from "../iconAvatar/IconAvatar";

export function NavbarLogin({user, logoutUser}) {
  return (
    <>
      <Nav.Link as={Link} href="#" onClick={logoutUser}>
        Logaot
      </Nav.Link>
      <NavDropdown
        id="basic-nav-dropdown"
        title={<IconAvatar name={`${user.name} ${user.last_name}`} />}
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}
