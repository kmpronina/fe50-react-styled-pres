import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  ProgressContainerStyled,
  Circle,
  Line,
} from "./progress-bar-styled.ts";
library.add(faCheck);

interface IProps {
  step: string;
  inProgress?: boolean;
  done?: boolean;
}

export const ProgressBar = ({ step, inProgress, done }: IProps) => {
  return (
    <ProgressContainerStyled step={step}>
      {step === "Step1" && (
        <>
          <Circle inProgress={true} done={false}>
            1
          </Circle>
          <Line />
          <Circle>2</Circle>
          <Line />
          <Circle>3</Circle>
        </>
      )}
      {step === "Step2" && (
        <>
          <Circle inProgress={true} done={true}>
            <FontAwesomeIcon icon="fa-solid fa-check" />
          </Circle>
          <Line inProgress={true} />
          <Circle inProgress={true} done={false}>
            2
          </Circle>
          <Line />
          <Circle>3</Circle>
        </>
      )}
      {step === "Step3" && (
        <>
          <Circle inProgress={true} done={true}>
            <FontAwesomeIcon icon="fa-solid fa-check" />
          </Circle>
          <Line inProgress={true} />
          <Circle inProgress={true} done={true}>
            <FontAwesomeIcon icon="fa-solid fa-check" />
          </Circle>
          <Line inProgress={true} />
          <Circle inProgress={true} done={false}>
            3
          </Circle>
        </>
      )}
    </ProgressContainerStyled>
  );
};
