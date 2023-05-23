"use client";
import { Container as ContainerBoot} from "react-bootstrap";
export function ContainerWithOutRow({
  children,
  containerProps,
  style = {},
  containerClass = "",
}) {
  return (
    <ContainerBoot className={containerClass} {...containerProps} style={style}>
        {children}
    </ContainerBoot>
  );
}
