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
      color: ${theme.colors.text};
      font-family: ${settings.font === "retro" ? "retro" : ""};
    }

    .menubar {
      height: ${settings.scale * 0.7}cm;
      background-color: ${settings.connectedMenubar
      ? "rgba(" + theme.colors.background + "," + settings.opacity + ")"
      : "transparent"};
      border-radius: ${theme.colors.borderRadius};
      bottom: ${settings.bottomMenubar ? "0" : ""};
      backdrop-filter: ${settings.connectedMenubar
      ? "blur(10px)"
      : "none"};
      transition: background-color 0.3s;
    }

    .menubarLeft,
    .menubarRight {
      font-size: ${settings.scale * 16}px;
      background-color: ${settings.connectedMenubar
      ? "transparent"
      : "rgba(" + theme.colors.background + "," + settings.opacity + ")"};
      color: ${theme.colors.text};
      height: ${settings.scale * 0.7}cm;
      border-radius: ${theme.borderRadius};
      line-height: ${settings.scale * 0.7}cm;
      backdrop-filter: ${settings.connectedMenubar
      ? "none"
      : "blur(10px)"};
      transition: background-color 0.3s, color 0.3s;
    }

    .menubarList {
      width: ${settings.scale * 4}cm;
      background-color: ${"rgba(" +
    theme.background +
    "," +
    settings.opacity +
    ")"};
      border-radius: ${theme.borderRadius};
      bottom: ${settings.bottomMenubar
      ? (settings.scale * 0.7) + "cm"
      : null};
    }

    .menubarDropdown > * {
      padding-right: ${settings.scale * 5}px;
      color: ${theme.text};
    }

    .menubarButton {
      font-size: ${settings.scale * 15}px;
      font-family: ${settings.font === "retro" ? "retro" : ""};
      color: ${theme.text};
    }

    .menubarButton > img {
      width: ${settings.scale * 0.7}cm;
    }
    .settingsPreviews {
      border-radius: ${theme.borderRadius};
    }

    .currentBackgroundPreview,
    .defaultBackgroundHolder > img,
    .aboutContainer > div {
      border-radius: ${theme.borderRadius};
    }

    .openWindowList {
      color: ${theme.text};
      height: ${settings.scale * 0.7}cm;
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

    .openWindowListIcon {
      height: ${settings.scale * 0.6}cm;
    }

    .openWindowList > div {
      height: ${settings.scale * 0.8}cm;
    }

    .settings > button {
      color: ${theme.unfocusedText};
      font-family: ${settings.font === "retro" ? "retro" : ""};
    }

    .settings > button:hover {
      filter: ${theme === darkTheme ? "brightness(2)" : "brightness(0.1)"};
    }

    .backgroundOptions > label > *, .miscSettings2 > button, .buttonHolder > button {
      background: ${theme === classicTheme ? "white" : theme.titlebarBackground};
      border-radius: ${theme.borderRadius};
      color: ${theme.text};
    }

    textarea {
      color: ${theme === darkTheme ? "white" : "black"};
    }
  `
);

interface themeInterface {
  colors: {
    background: string,
    text: string,
    unfocusedText: string,
    titlebarText: string,
    titlebarBg: string,
    unfocusedTitlebarBg: string
  };
  titlebarAlignment: {
    collapsePos: string,
    closePos: string,
    textPos: string
  };
  border: string,
  borderRadius: number;
  opacity: number;
  scale: number;
}

export const lightTheme: themeInterface = {
  colors: {
    background: "255, 255, 255",
    text: "#121212",
    unfocusedText: "gray",
    titlebarText: "#121212",
    titlebarBg: "linear-gradient(to right, white, lightgray)",
    unfocusedTitlebarBg: "linear-gradient(to right, white, lightgray)",
  },
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "left",
    textPos: "center"
  },
  border: "none",
  borderRadius: 5,
  opacity: 0.8,
  scale: 1
};

export const darkTheme: themeInterface = {
  colors: {
    background: "9, 10, 12",
    text: "#fff",
    unfocusedText: "darkgray",
    titlebarText: "#fff",
    titlebarBg: "linear-gradient(to right, #090a0c, gray)",
    unfocusedTitlebarBg: "linear-gradient(to right, #090a0c, gray)",
  },
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "left",
    textPos: "center"
  },
  border: "none",
  borderRadius: 5,
  opacity: 0.8,
  scale: 1
};

export const classicTheme: themeInterface = {
  colors: {
    background: "169, 169, 169",
    text: "#121212",
    unfocusedText: "#303030",
    titlebarText: "#fff",
    titlebarBg: "#00008B",
    unfocusedTitlebarBg: "#606060",
  },
  titlebarAlignment: {
    collapsePos: "right",
    closePos: "right",
    textPos: "left"
  },
  border: "2px outset lightgray",
  borderRadius: 0,
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
