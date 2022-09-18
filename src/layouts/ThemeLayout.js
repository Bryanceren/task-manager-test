import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#da584b",
  secondary: "#70B252",
  tertiary: "#E5B454",
  neutral1: "#94979a",
  bgMain: "#222528",
  bgLight: "#2C2F33",
};
const ThemeLayout = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeLayout;
