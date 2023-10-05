import React, { ReactNode } from "react";
import { ButtonStyled } from "./button-styled.tsx";

interface IProps {
  className?: string;
  $bcolor: string;
  size?: "small" | "normal" | "medium";
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: "active" | "disabled";
  outline?: "normal" | "outline";
  onClick?: () => void;
}

export const Button = ({
  className,
  $bcolor,
  size,
  children,
  type = "button",
  disabled,
  outline,
  onClick,
}: IProps) => {
  return (
    <ButtonStyled
      className={className}
      type={type}
      $bcolor={$bcolor}
      size={size}
      disabled={disabled}
      outline={outline}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};
