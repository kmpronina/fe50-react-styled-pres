import styled from "styled-components";

export const ProgressContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px auto;
  align-items: center;
`;

export const Circle = styled.div<{ inProgress; done }>`
  width: 50px;
  height: 50px;
  border: 2px solid
    ${({ inProgress, done }) =>
      inProgress === true && done === false
        ? "#116ACC"
        : done === true
        ? "#116ACC"
        : "#6B7280"};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ done }) => (done === true ? "#116ACC" : "#fff")};
  color: ${({ inProgress, done }) =>
    inProgress === true && done === false
      ? "#116ACC"
      : done === true
      ? "#fff"
      : "#6B7280"};
`;

export const Line = styled.div<{ inProgress }>`
  display: block;
  width: 150px;
  height: 2px;
  color: ${({ inProgress }) => (inProgress === true ? "#116ACC" : "#6B7280")};
`;
