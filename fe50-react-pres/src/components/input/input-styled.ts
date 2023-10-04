import styled from "styled-components";

export const InputStyled = styled.input<{ status }>`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  padding: 6px 12px;
  transition: all 0.3s ease-in-out;
  width: 300px;
  margin-left: 15px;
  margin-bottom: 15px;
  &:focus {
    background-color: rgba(17, 106, 204, 0.1);
  }
  &:hover {
    background-color: rgba(17, 106, 204, 0.1);
    border: 2px solid #116acc;
  }
  &::placeholder {
    color: ${({ status }) => (status === "disabled" ? "#9CA3AF" : "#6B7280")};
    &:focus {
      display: none;
    }
  }
`;
export const InputLabelStyled = styled.label``;
