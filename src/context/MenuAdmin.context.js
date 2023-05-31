"use client";
import { ADMIN_ROUTES } from "@/routes";
import { createContext, useState } from "react";


export const MenuAdminContext = createContext();

export function MenuAdminProvider({ children }) {
  let [links, setLinks] = useState(ADMIN_ROUTES.SETTINGS_LINKS);
  let [section, setSection] = useState("Dashboard");

  let contextData = {
    links,
    setLinks,
    section,
    setSection,
  };


  return (
    <MenuAdminContext.Provider value={contextData}>
      {children}
    </MenuAdminContext.Provider>
  );
}
