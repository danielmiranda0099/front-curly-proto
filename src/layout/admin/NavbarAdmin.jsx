'use client';
import { Navbar } from "@/components";
import { MenuAdminContext } from "@/context/MenuAdmin.context";
import { useContext } from "react";

export function NavbarAdmin() {
    let {links, section} = useContext(MenuAdminContext);
  return (
    <Navbar
      brand={section}
      staticLinks={links}
      navbarStyle={{ background: "#eae2e1" }}
    />
  );
}
