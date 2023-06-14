"use client";
import { SideBar, SideBarContentLinks, SideBarLink } from "@/components";
import { MenuAdminContext } from "@/context/MenuAdmin.context";
import { CarIcon, ChartIcon, DashboardIcon, SettingIcon } from "@/icons";
import { useContext } from "react";
import { ADMIN_ROOT, ADMIN_ROUTES } from "@/routes";
const style = {
  backgroundColor: "#397bdf",
};

export function SideBarAdmin() {
  const { setLinks, setSection } = useContext(MenuAdminContext);
  return (
    <SideBar style={style}>
      <SideBarContentLinks>
        <SideBarLink
          label={"Dashboard"}
          onClickLabel={() => setSection(ADMIN_ROUTES.DASHBOARD_LINKS[0])}
          links={ADMIN_ROOT}
          icon={<DashboardIcon size={"2.7vw"} />}
        />
        <SideBarLink
          label={"Contabilidad"}
          onClickLabel={() => {
            setLinks(ADMIN_ROUTES.CONTABLE_LINKS);
            setSection(ADMIN_ROUTES.CONTABLE_LINKS[0]);
          }}
          links={ADMIN_ROUTES.CONTABLE_LINKS}
          icon={<ChartIcon size={"2.7vw"} />}
        />
        <SideBarLink
          label={"Productos"}
          onClickLabel={() => {
            setLinks(ADMIN_ROUTES.PRODUCTS_LINKS);
            setSection(ADMIN_ROUTES.PRODUCTS_LINKS[0]);
          }}
          links={ADMIN_ROUTES.PRODUCTS_LINKS}
          icon={<CarIcon size={"2.7vw"} />}
        />
        <SideBarLink
          label={"Configuración"}
          onClickLabel={() => {
            setLinks(ADMIN_ROUTES.SETTINGS_LINKS);
            setSection(ADMIN_ROUTES.SETTINGS_LINKS[0]);
          }}
          links={ADMIN_ROUTES.SETTINGS_LINKS}
          icon={<SettingIcon size={"2.7vw"} />}
        />
      </SideBarContentLinks>
    </SideBar>
  );
}
