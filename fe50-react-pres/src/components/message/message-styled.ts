import styled from "styled-components";

export const MessageStyled = styled.div<{ type }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  padding: 12px 24px;
  margin: 10px;
  width: 300px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  border: 1px solid;
  border-color: ${({ type }) =>
    type === "warning"
      ? "rgba(251, 199, 86, 1)"
      : type === "error"
      ? "rgba(186, 0, 0, 1)"
      : type === "info"
      ? "rgba(17, 106, 204, 1)"
      : type === "success"
      ? "rgba(118, 202, 102, 1)"
      : "black"};
  border-radius: 5px;
  background-color: ${({ type }) =>
    type === "warning"
      ? "rgba(251, 199, 86, 0.25)"
      : type === "error"
      ? "rgba(186, 0, 0, 0.25)"
      : type === "info"
      ? "rgba(17, 106, 204, 0.25)"
      : type === "success"
      ? "rgba(118, 202, 102, 0.25)"
      : "#fff"};
  color: ${({ type }) =>
    type === "warning"
      ? "rgba(251, 199, 86, 1)"
      : type === "error"
      ? "rgba(186, 0, 0, 1)"
      : type === "info"
      ? "rgba(17, 106, 204, 1)"
      : type === "success"
      ? "rgba(118, 202, 102, 1)"
      : "black"};
`;
