import React from "react";
import { InputLabelStyled, InputStyled } from "./input-styled.ts";

interface IProps {
  className?: string;
  label: string;
  placeholder?: string;
  status?: "default" | "disabled";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = ({
  label,
  className,
  placeholder,
  status,
  onChange,
}: IProps) => {
  return (
    <InputLabelStyled>
      {" "}
      {label}
      <InputStyled
        className={className}
        placeholder={placeholder}
        status={status}
        onChange={onChange}
      />
    </InputLabelStyled>
  );
};
