import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Msg } from "../../components/message/message.tsx";
import { MessageContainerStyled } from "./message-container.styled.ts";

library.add(faXmark);
export const MessageContainer = () => {
  return (
    <MessageContainerStyled>
      <Msg type={"error"}>
        <span>This is an error message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Msg>
      <Msg type={"success"}>
        <span>This is a success message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Msg>
      <Msg type={"warning"}>
        <span>This is a warning message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Msg>
      <Msg type={"info"}>
        <span>This is an information message</span>
        <FontAwesomeIcon icon="fa-solid fa-xmark" />
      </Msg>
    </MessageContainerStyled>
  );
};
