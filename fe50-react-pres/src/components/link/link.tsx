import React, { ReactNode } from "react";
import { LinkStyled } from "./link-styled";

interface IProps {
  href: string;
  children: ReactNode;
  color: string;
}

export const LinkCustom = ({ href, children, color }: IProps) => {
  return (
    <LinkStyled
      href={href}
      className="link"
      style={{
        color: color,
      }}
    >
      {children}
    </LinkStyled>
  );
};
