import styled from "styled-components";

export const ButtonsMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
`;
export const ButtonsSmallContainerStyled = styled.div`
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
export const ButtonTypeTitle = styled.h3`
  color: #374151;
  font-size: 32px;
  font-weight: 700;
  line-height: 36px;
  word-wrap: break-word;
`;
