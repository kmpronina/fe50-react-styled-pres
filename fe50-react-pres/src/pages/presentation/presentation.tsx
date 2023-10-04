import React from "react";
import { ButtonsContainer } from "../../containers/buttons-container/button-container.tsx";
import { ElementsContainer } from "../../containers/elements-container/elements.tsx";
import { Header } from "../../containers/header/header.tsx";
import { InputsContainer } from "../../containers/inputs-container/inputs-container.tsx";
import { MessageContainer } from "../../containers/message-container/message-container.tsx";

export const Presentation = () => {
  return (
    <div>
      <Header />
      <ElementsContainer number={"04."} title={"Text fields"}>
        <InputsContainer />
      </ElementsContainer>
      <ElementsContainer number={"05."} title={"Buttons"}>
        <ButtonsContainer />
      </ElementsContainer>
      <ElementsContainer number={"06."} title={"Snackbar"}>
        <MessageContainer />
      </ElementsContainer>
    </div>
  );
};
