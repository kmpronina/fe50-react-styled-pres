import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Message } from "../../components/message/message.tsx";
import { MessageContainerStyled } from "./message-container.styled.ts";
library.add(faXmark);

export const MessageContainer = () => {
  return (
    <MessageContainerStyled>
      <Message type={"error"}>
        <span>This is an error message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Message>
      <Message type={"success"}>
        <span>This is a success message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Message>
      <Message type={"warning"}>
        <span>This is a warning message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Message>
      <Message type={"info"}>
        <span>This is an information message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Message>
    </MessageContainerStyled>
  );
};
