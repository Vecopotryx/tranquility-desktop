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
      color: var(--primary-color);
      font-family: ${settings.font === "retro" ? "retro" : ""};
    }

    .loadingSpinner {
      filter: ${theme === lightTheme || theme === classicTheme
      ? "invert(1)"
      : ""};
    }

    .githubIcon {
      filter: ${theme === darkTheme ? "invert(1)" : ""};
    }

    .terminalInput {
      caret-color: ${theme === darkTheme ? "white" : "black"};
      color: ${theme === darkTheme ? "white" : "black"};
    }

    .settings > button {
      font-family: ${settings.font === "retro" ? "retro" : ""};
    }

    .settings > button:hover {
      filter: ${theme === darkTheme ? "brightness(2)" : "brightness(0.1)"};
    }

    textarea {
      color: ${theme === darkTheme ? "white" : "black"};
    }
  `
);

interface themeInterface {
  titlebarAlignment: {
    collapsePos: string,
    closePos: string,
    textPos: string
  };
  opacity: number;
  scale: number;
}

export const lightTheme: themeInterface = {
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "left",
    textPos: "center"
  },
  opacity: 0.8,
  scale: 1
};

export const darkTheme: themeInterface = {
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "left",
    textPos: "center"
  },
  opacity: 0.8,
  scale: 1
};

export const classicTheme: themeInterface = {
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "right",
    textPos: "left"
  },
  opacity: 0.8,
  scale: 1
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
