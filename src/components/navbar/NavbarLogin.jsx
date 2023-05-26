import Link from "next/link";
import { Nav, NavDropdown } from "@/bootstrap";
import { IconAvatar } from "../iconAvatar/IconAvatar";

export function NavbarLogin({user, logoutUser}) {
  console.log(user)
  return (
    <>
      <NavDropdown
        id="basic-nav-dropdown"
        title={<IconAvatar name={`${user.name} ${user.last_name}`} />}
      >
        {
          user.is_manager && (
            <>
            <NavDropdown.Item as={Link} href="/admin">Ir a Admin</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Ir a Caja</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Ir a Registro</NavDropdown.Item>
            </>
          )
        }
        <NavDropdown.Item href="#action/3.2">ver Compras</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Configuracion</NavDropdown.Item>
        <NavDropdown.Item as={Link} href="#" onClick={logoutUser}>Cerrar Sesion</NavDropdown.Item>
      </NavDropdown>
    </>
  );
}
