import React, { ReactNode } from "react";
import styled from "styled-components";

interface IButtonsSmallContainer {
  title: string;
  children: ReactNode;
}
export const ButtonsSmallContainer = ({
  title,
  children,
}: IButtonsSmallContainer) => {
  return (
    <ButtonsSmallContainerStyled>
      <ButtonTypeTitle> {title} </ButtonTypeTitle>
      {children}
    </ButtonsSmallContainerStyled>
  );
};
const ButtonsSmallContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  & > tr,
  td {
    padding: 20px;
    color: #4b5563;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    word-wrap: break-word;
  }
  & > p {
    color: #4b5563;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    word-wrap: break-word;
  }
`;
const ButtonTypeTitle = styled.h3`
  color: #374151;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  word-wrap: break-word;
`;
