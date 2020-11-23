import { black, gold, green, neutral, red } from "./colors";
import { primaryFont, bodyFont } from "./typography";

export const defaultTheme = {
  primaryColor: black[100],
  primaryColorButton: gold[100],
  primaryColorOnHover: gold[200],
  textColor: neutral[100],
  textColorInverted: black[100],
  status: {
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
  primaryFont,
  bodyFont,
};

export const darkTheme = {
  primaryColor: neutral[100],
  primaryColorButton: gold[100],
  primaryColorOnHover: gold[200],
  textColor: black[100],
  textColorInverted: neutral[100],
  status: {
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
  primaryFont,
  bodyFont,
};
