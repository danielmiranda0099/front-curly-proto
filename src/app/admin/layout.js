import { Navbar } from "@/components";
import {
  SideBar,
  SideBarContentLinks,
  SideBarLink,
} from "@/components/sideBar";
import { CarIcon, ChartIcon, SettingIcon } from "@/icons";
import "@/styles/layout/admin.css";

export const metadata = {
  title: "Rincon Admin",
};

const staticLinks = [
  {
    targer: "Home",
    route: "/",
  },
  {
    targer: "Tienda",
    route: "/tienda",
  },
  {
    targer: "Contable",
    route: "/admin/curly-contable",
  },
];

const style = {
  backgroundColor: "#397bdf"
}

export default function AdminLayout({ children }) {
  return (
    <div className="container-admin">
      <SideBar style={style}>
        <SideBarContentLinks>
          <SideBarLink label={"Settings"} icon={<SettingIcon size={"2.7vw"} />} />
          <SideBarLink label={"Balance"} icon={<ChartIcon size={"2.7vw"} />} />
          <SideBarLink label={"Productos"} icon={<CarIcon size={"2.7vw"} />} />
        </SideBarContentLinks>
      </SideBar>

      <div className="content-admin">
        <Navbar brand={"Nombre"} staticLinks={staticLinks} navbarStyle={{ background: "#eae2e1"}}/>

        {children}
      </div>
    </div>
  );
}
