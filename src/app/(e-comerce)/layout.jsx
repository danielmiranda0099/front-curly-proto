import { Navbar } from "@/components";
import { CarIcon } from "@/icons";
import { ECOMERCE_ROUTES } from "@/routes";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar
        brand={ ECOMERCE_ROUTES.HOME_LINKS[0] }
        staticLinks={ECOMERCE_ROUTES.HOME_LINKS}
        navbarStyle={{ background: "#eae2e1" }}
        staticLinksRight={[{ path: "#", item: <CarIcon size={40} /> }]}
      />

      {children}
    </>
  );
}
