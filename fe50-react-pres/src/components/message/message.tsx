import React from "react";
import { MessageStyled } from "./message-styled.ts";

interface IProps {
  children?: string;
  type?: "warning" | "success" | "error" | "info";
}
export const Msg = ({ children, type }: IProps) => {
  return <MessageStyled type={type}> {children} </MessageStyled>;
};
