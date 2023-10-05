import styled from "styled-components";

export const ButtonStyled = styled.button<{
  bcolor: string;
  size: string;
  disabled: string;
  outline: string;
}>`
  all: unset;
  box-sizing: border-box;
  vertical-align: middle;
  text-align: center;
  cursor: ${({ disabled }) =>
    disabled === "disabled" ? "not-allowed" : "pointer"};
  padding: ${({ size }) =>
    size === "small"
      ? "14px 21px"
      : size === "medium"
      ? "18px 27px"
      : "16px 24px"};
  margin: 24px 0;
  background-color: ${({ bcolor, disabled, outline }) =>
    bcolor === "red"
      ? "#FD4E5D"
      : disabled === "disabled" && outline === "outline"
      ? "#fff"
      : disabled === "disabled"
      ? "#9CA3AF"
      : outline === "outline"
      ? "FFF"
      : "#4169e1"};
  color: ${({ outline, disabled }) =>
    disabled === "disabled" && outline === "outline"
      ? "#9CA3AF"
      : outline === "outline"
      ? "#116ACC"
      : "#fff"};
  border: ${({ outline, disabled }) =>
    disabled === "disabled" && outline === "outline"
      ? "2px solid #9CA3AF"
      : outline === "outline"
      ? "2px solid #116ACC"
      : "0px solid #fff"};
  border-radius: 5px;
  font-size: ${({ size }) =>
    size === "small" ? "14px" : size === "medium" ? "18px" : "16px"};
  font-weight: 500;
  line-height: ${({ size }) => (size === "medium" ? "22px" : "20px")};
  word-wrap: break-word;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ disabled, outline }) =>
      disabled === "disabled" && outline === "outline"
        ? "#fff"
        : disabled === "disabled"
        ? "#9CA3AF"
        : "#6495ED"};
  }
  &:active {
    background-color: ${({ disabled, outline }) =>
      disabled === "disabled"
        ? "#9CA3AF"
        : outline === "outline"
        ? "#6495ED"
        : "#0066b2"};
        color: ${({ outline, disabled }) =>
          outline === "outline"
            ? "#0066b2"
            : disabled === "disabled"
            ? "9CA3AF"
            : "#fff"}
      border-color: ${({ outline, disabled }) =>
        outline === "outline"
          ? "002D62"
          : disabled === "disabled"
          ? "9CA3AF"
          : "#fff"}
  }
`;
