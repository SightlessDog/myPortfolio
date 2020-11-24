import styled from "styled-components";
import { defaultTheme, primaryFont, typeScale } from "../utils";

const Button = styled.button`
  padding: 12px 24px;
  font-size: ${typeScale.paragraphText};
  border-radius: 2px;
  min-width: 100px;
  cursor: pointer;
  font-family: ${primaryFont};
  transition: background-color 0.2 linear, color 0.2 linear;

  &:hover {
    background-color: ${defaultTheme.primaryColorButtonOnHover};
    color: ${defaultTheme.textColorInverted};
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColorButton};
  color: ${defaultTheme.textColorInverted};
  border: none;
`;
