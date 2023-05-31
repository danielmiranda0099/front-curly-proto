
import { Navbar } from "@/components";
import { ECOMERCE_ROUTES } from "@/routes";


export default function RootLayout({ children }) {
  return (
<>
        <Navbar brand={"Rincon Curly"} staticLinks={ECOMERCE_ROUTES.HOME_LINKS} navbarStyle={{ background: "#eae2e1"}} />

        {children}
</>

  );
}
