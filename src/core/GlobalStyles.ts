import { createGlobalStyle, css } from "styled-components";

interface SettingsTypes {
  theme: string;
  scale: number;
  connectedMenubar: boolean;
  bottomMenubar: boolean;
  opacity: number;
  font: string;
  usingLocalStorage: boolean;
  background: string;
}

interface Props {
  settings: SettingsTypes;
  theme: any;
}

export const GlobalStyles = createGlobalStyle(
  ({ settings, theme }: Props) => css`
    body {
      background-image: ${settings.background};
    }
  `
);

interface themeInterface {

}

export const lightTheme: themeInterface = {

};

export const darkTheme: themeInterface = {

};

export const classicTheme: themeInterface = {

};

export const getTheme = (theme: string) => {
  switch (theme) {
    case "dark":
      return darkTheme;
    case "classic":
      return classicTheme;
    default:
      return lightTheme;
  }
};
