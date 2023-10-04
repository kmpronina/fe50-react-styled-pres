import React from "react";
import { InputText } from "../../components/input/input.tsx";
import { InputsContainerStyled } from "./inputs-container-styled.ts";

export const InputsContainer = () => {
  return (
    <InputsContainerStyled>
      <InputText placeholder={"Placeholder"} label={"Default"} />
      <InputText
        placeholder={"Placeholder"}
        status={"disabled"}
        label={"Disabled"}
      />
    </InputsContainerStyled>
  );
};
