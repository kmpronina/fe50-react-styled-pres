import { HeaderStyled } from "./header-styled.tsx";
import { NavLink } from "react-router-dom";
import React from "react";

export const Header = () => {
  const links = [
    {
      id: 1,
      href: "/",
      children: "Home",
    },
    {
      id: 2,
      href: "/presentation",
      children: "Presentation",
    },
  ];

  return (
    <HeaderStyled>
      {links.map(({ id, href, children }) => (
        <NavLink key={id} to={href}>
          {children}
        </NavLink>
      ))}
    </HeaderStyled>
  );
};
