
import { Navbar } from "@/components";

const staticLinks = [
  {
    targer: "Home",
    route: "/"
  },
  {
    targer: "Tienda",
    route: "/tienda"
  },
  {
    targer: "Contable",
    route: "/admin/curly-contable"
  },
]

export default function RootLayout({ children }) {
  return (
<>
        <Navbar brand={"Rincon Curly"} staticLinks={staticLinks} navbarStyle={{ background: "#eae2e1"}} />

        {children}
</>

  );
}
