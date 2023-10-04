import styled from "styled-components";

export const HeaderStyled = styled.div`
  height: 50px;
  background-color: #f0f8ff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0px;
  margin-bottom: 15px;
  & > a {
    all: unset;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 24px;
    font-width: 600;
    color: #191970;
  }
`;
