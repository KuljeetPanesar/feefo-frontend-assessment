import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      bold: string;
    };
    typography: {
      fontFamily: string;
      fontSizes: {
        small: string;
        base: string;
        large: string;
        heading: string;
      };
      fontWeights: {
        regular: number;
        medium: number;
        bold: number;
      };
    };
  }
}
