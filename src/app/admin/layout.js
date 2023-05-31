import { MenuAdminProvider } from "@/context/MenuAdmin.context";
import { NavbarAdmin, SideBarAdmin } from "@/layout";
import "@/styles/layout/admin.css";

export const metadata = {
  title: "Rincon Admin",
};

export default function AdminLayout({ children }) {
  return (
    <MenuAdminProvider>
    <div className="container-admin">
      <SideBarAdmin />

      <div className="content-admin">
        <NavbarAdmin />
        {children}
      </div>
    </div>
    </MenuAdminProvider>
  );
}
