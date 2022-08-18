import { createGlobalStyle, css } from "styled-components";
import perfectDOS from "../assets/styles/Perfect_DOS_VGA_437_Win.ttf";

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
    @font-face {
      font-family: "retro";
      src: local("perfect-dos"), url(${perfectDOS}) format("truetype");
    }

    body {
      background-image: ${settings.background};
      font-family: ${settings.font === "retro" ? "retro" : ""};
    }
  `
);

interface themeInterface {
  titlebarAlignment: {
    collapsePos: string,
    closePos: string,
    textPos: string
  };
}

export const lightTheme: themeInterface = {
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "left",
    textPos: "center"
  }
};

export const darkTheme: themeInterface = {
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "left",
    textPos: "center"
  }
};

export const classicTheme: themeInterface = {
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "right",
    textPos: "left"
  }
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
