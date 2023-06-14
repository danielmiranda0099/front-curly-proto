export const ADMIN_ROOT = '/admin'
export const ADMIN_ROUTES = {
  DASHBOARD_LINKS: [
    {
      label: "Dashboard",
      route: `${ADMIN_ROOT}/`,
    }
  ],
  CONTABLE_LINKS: [
    {
      label: "Contabilidad",
      route: `${ADMIN_ROOT}#1`,
    },
    {
      label: "Caja",
      route: `${ADMIN_ROOT}/caja`,
    },
  ],
  PRODUCTS_LINKS: [
    {
      label: "Productos",
      route: `${ADMIN_ROOT}#1`,
    },
  ],
  SETTINGS_LINKS: [
    {
      label: "Settings",
      route: `${ADMIN_ROOT}#2`,
    },
    {
      label: "Cuenta",
      route: `${ADMIN_ROOT}#3`,
    },
    {
      label: "Settings",
      route: `${ADMIN_ROOT}#4`,
    },
  ],
};
