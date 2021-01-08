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
      color: ${theme.text};
      font-family: ${settings.font === "retro" ? "retro" : ""};
    }

    .titlebar,
    .titlebarUnfocused {
      height: ${settings.scale * 0.7}cm;
      color: ${theme.titlebarTextColor};
      background: ${theme.titlebarBackground};
      text-align: ${theme.titlebarTextAlignment};
    }

    .titlebar > button {
      color: ${theme.titlebarTextColor};
      line-height: ${settings.scale * 0.7}cm;
      font-size: ${settings.scale * 15}px;
    }

    .appName {
      font-size: ${settings.scale * 15}px;
      line-height: ${settings.scale * 0.7}cm;
    }
    .titlebarUnfocused {
      color: ${theme.unfocusedText};
      background: ${theme.unfocusedTitlebarBackground};
    }

    .titlebarUnfocused > button {
      font-size: ${settings.scale * 15}px;
      line-height: ${settings.scale * 0.7}cm;
      color: ${theme.unfocusedText};
    }

    .collapseWindow {
      float: ${theme.collapseWindowPosition};
      color: ${theme.text};
    }

    .closeWindow {
      float: ${theme.closeWindowPosition};
      color: ${theme.text};
    }

    .appWindow {
      border-radius: ${theme.borderRadius};
      border: ${theme.border};
      background-color: ${theme.background};
      background-color: rgba(${theme.background}, ${settings.opacity});
    }

    .appWindow,
    .appContent {
      min-height: ${settings.scale * 0.7}cm;
      min-width: ${settings.scale * 4}cm;
    }

    .appContent {
      height: calc(100% - ${settings.scale * 0.7}cm);
    }

    .menubar {
      height: ${settings.scale * 0.7}cm;
      background-color: ${settings.connectedMenubar
        ? "rgba(" + theme.background + "," + settings.opacity + ")"
        : "transparent"};
      border-radius: ${theme.borderRadius};
      bottom: ${settings.bottomMenubar ? "0" : ""};
    }

    .menubarLeft,
    .menubarRight {
      font-size: ${settings.scale * 16}px;
      background-color: ${settings.connectedMenubar
        ? "transparent"
        : "rgba(" + theme.background + "," + settings.opacity + ")"};
      color: ${theme.text};
      height: ${settings.scale * 0.7}cm;
      border-radius: ${theme.borderRadius};
      line-height: ${settings.scale * 0.7}cm;
    }

    .menubarList {
      width: ${settings.scale * 4}cm;
      background-color: ${"rgba(" +
      theme.background +
      "," +
      settings.opacity +
      ")"};
      border-radius: ${theme.borderRadius};
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

    .settingsBackgroundPreview,
    .settingsCurrentBackgroundPreview {
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
  `
);

export const lightTheme = {
  background: "255, 255, 255",
  text: "#121212",
  unfocusedText: "gray",
  titlebarTextColor: "#121212",
  titlebarBackground: "linear-gradient(to right, white, lightgray)",
  unfocusedTitlebarBackground: "linear-gradient(to right, white, lightgray)",
  collapseWindowPosition: "right",
  closeWindowPosition: "left",
  titlebarTextAlignment: "center",
  borderRadius: "5px",
};

export const darkTheme = {
  background: "9, 10, 12",
  text: "#fff",
  unfocusedText: "darkgray",
  titlebarTextColor: "#fff",
  titlebarBackground: "linear-gradient(to right, #090a0c, gray)",
  unfocusedTitlebarBackground: "linear-gradient(to right, #090a0c, gray)",
  collapseWindowPosition: "right",
  closeWindowPosition: "left",
  titlebarTextAlignment: "center",
  borderRadius: "5px",
};

export const classicTheme = {
  background: "169, 169, 169",
  text: "#121212",
  unfocusedText: "gray",
  titlebarTextColor: "#fff",
  titlebarBackground: "#00008B",
  unfocusedTitlebarBackground: "#606060",
  collapseWindowPosition: "right",
  closeWindowPosition: "right",
  titlebarTextAlignment: "left",
  borderRadius: "0px",
  border: "2px outset lightgray",
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
