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
}

export const GlobalStyles = createGlobalStyle(
  ({ settings }: Props) => css`
    body {
    }
  `
);

//       background-image: ${settings.background};
