import { DefaultTheme } from "styled-components";

const AppTheme: DefaultTheme = {
  colors: {
    primary: "#e2e2e2",
    secondary: "#FFDD00",
    background: "#ffffff",
    text: "#484545",
    bold: "#424243",
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSizes: {
      small: "0.875rem",
      base: "1rem",
      large: "1.2rem",
      heading: "2rem",
    },
    fontWeights: {
      regular: 400,
      medium: 600,
      bold: 700,
    },
  },
};

export default AppTheme;
