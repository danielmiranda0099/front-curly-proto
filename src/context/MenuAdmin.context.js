"use client";
import { ADMIN_ROUTES } from "@/routes";
import { createContext, useState } from "react";


export const MenuAdminContext = createContext();

export function MenuAdminProvider({ children }) {
  let [links, setLinks] = useState([]);
  let [section, setSection] = useState(ADMIN_ROUTES.DASHBOARD_LINKS[0]);

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
