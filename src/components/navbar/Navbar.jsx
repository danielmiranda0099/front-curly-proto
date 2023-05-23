"use client";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/context/Auth.context";

import { Nav, Navbar as NavbarBoots } from "@/bootstrap";

import { Container } from "../container";

import { useDesktopOrLarger } from "@/hooks/useDesktopOrLarger";
import { NavLinks } from "./NavLinks";

import { NavbarLogin } from "./NavbarLogin";
import { NavbarWithOutLogin } from "./NavbarWithOutLogin";

import "./navbar.css";

export function Navbar({ brand, staticLinks }) {
  let { user, logoutUser } = useContext(AuthContext);

  let isDesktopOrLarger = useDesktopOrLarger();

  return (
    <NavbarBoots
      bg="light"
      expand="lg"
      className={isDesktopOrLarger ? "" : "flex flex-row"}
    >
      <Container
        containerClass={ isDesktopOrLarger ? "flex flex-row flex-end" : "flex flex-row"}
      >
        <NavbarBoots.Brand as={Link} href="/">
          {brand}
        </NavbarBoots.Brand>

        <Container>
          <NavbarBoots.Toggle aria-controls="basic-navbar-nav" />
          <Container>
            <NavbarBoots.Collapse id="basic-navbar-nav">
              <Container>
                <Nav>
                  <NavLinks links={staticLinks} />
                </Nav>
              </Container>

              <Container
                containerClass={isDesktopOrLarger ? "flex flex-row flex-end" : ""}
              >
                <Nav>
                  {user ? (
                    <NavbarLogin user={user} logoutUser={logoutUser} />
                  ) : (
                    <NavbarWithOutLogin />
                  )}
                </Nav>
              </Container>
            </NavbarBoots.Collapse>
          </Container>
        </Container>
      </Container>
    </NavbarBoots>
  );
}
