"use client";
import { Container as ContainerBoot, Row } from "react-bootstrap";
import { ContainerWithRow } from "./ContainerWithRow";
import { ContainerWithOutRow } from "./ContainerWithOutRow";
export function Container({
  children,
  row = false,
  containerProps,
  style = {},
  rowProps,
  containerClass = "",
  rowClass = "",
}) {
  if (row) {
    return (
      <ContainerWithRow
        containerProps={containerProps}
        style={style}
        containerClass={containerClass}
        rowProps={rowProps}
        rowClass={rowClass}
      >
        {children}
      </ContainerWithRow>
    );
  }

  return (
    <ContainerWithOutRow
      containerProps={containerProps}
      style={style}
      containerClass={containerClass}
    >
      {children}
    </ContainerWithOutRow>
  );
}
