import React, { ReactNode } from "react";
import {
  ElementsContainerStyled,
  Title,
  Number,
  TitleWrapper,
} from "./elements-styled.tsx";

interface IProps {
  number: string;
  title: string;
  children: ReactNode;
}
export const ElementsContainer = ({ number, title, children }: IProps) => {
  return (
    <ElementsContainerStyled>
      <TitleWrapper>
        <Number>{number}</Number>
        <Title>{title}</Title>
      </TitleWrapper>
      {children}
    </ElementsContainerStyled>
  );
};
