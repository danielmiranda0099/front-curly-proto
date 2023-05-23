"use client";
import { Container as ContainerBoot, Row } from "react-bootstrap";
export function ContainerWithRow({
  children,
  containerProps,
  style = {},
  rowProps,
  containerClass = "",
  rowClass = "",
}) {
  return (
    <ContainerBoot className={containerClass} {...containerProps} style={style}>
      <Row className={rowClass} {...rowProps}>
        {children}
      </Row>
    </ContainerBoot>
  );
}
