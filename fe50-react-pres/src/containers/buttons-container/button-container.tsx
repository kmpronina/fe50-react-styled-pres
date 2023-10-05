import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../components/button/button.tsx";
import { ButtonsMainContainer } from "./button-container-styled.tsx";
import { ButtonsSmallContainer } from "./buttons-small-container.tsx";

library.add(faPen);

export const ButtonsContainer = () => {
  return (
    <ButtonsMainContainer>
      <ButtonsSmallContainer title={"Color"}>
        <p>Primary</p>
        <Button>Button sample</Button>
        <p>Secondary</p>
        <Button bcolor={"red"}>Button sample</Button>
      </ButtonsSmallContainer>

      <ButtonsSmallContainer title={"Size"}>
        <p>Small</p>
        <Button size={"small"}>Button sample</Button>
        <p>Normal</p>
        <Button size={"normal"}>Button sample</Button>
        <p>Medium</p>
        <Button size={"medium"}>Button sample</Button>
      </ButtonsSmallContainer>

      <ButtonsSmallContainer title={"Variants"}>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td>Normal</td>
              <td>Icon Text</td>
              <td>Outline</td>
            </tr>
            <tr>
              <td>Rest</td>
              <td>
                <Button>Button</Button>
              </td>
              <td>
                <Button>
                  <FontAwesomeIcon icon="fa-solid fa-pen" />
                  Button
                </Button>
              </td>
              <td>
                <Button outline={"outline"}>Button</Button>
              </td>
            </tr>

            <tr>
              <td>Disabled</td>
              <td>
                <Button disabled={"disabled"}>Button</Button>
              </td>
              <td>
                <Button disabled={"disabled"}>
                  <FontAwesomeIcon icon="fa-solid fa-pen" />
                  Button
                </Button>
              </td>
              <td>
                <Button disabled={"disabled"} outline={"outline"}>
                  Button
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </ButtonsSmallContainer>
    </ButtonsMainContainer>
  );
};
