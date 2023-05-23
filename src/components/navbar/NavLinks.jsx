import Link from "next/link";
import { Nav } from "@/bootstrap";

export function NavLinks({links}) {
    return(
        links.map( ({targer, route}) => (
            <Nav.Link as={Link} href={route} key={route}>
                {targer}
            </Nav.Link>
        ))
    )
}