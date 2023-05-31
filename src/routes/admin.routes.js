export const ADMIN_ROOT = '/admin'
export const ADMIN_ROUTES = {
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
  SETTINGS_LINKS: [
    {
      label: "Cuenta",
      route: `${ADMIN_ROOT}#1`,
    },
    {
      label: "Settings",
      route: `${ADMIN_ROOT}#2`,
    },
  ],
};
