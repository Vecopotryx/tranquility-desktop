import React, { useEffect } from "react";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
  classicTheme,
} from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import WindowManager from "./components/WindowManager";
import { useSettings } from "./components/SettingsContext";
import "./styles/StaticStyles.css";

function App() {
  const settings = useSettings().customizeSettings;
  const setSettings = useSettings().setCustomizeSettings;

  useEffect(() => {
    const storedSettings = localStorage.getItem("settings");
    if (storedSettings !== null) {
      setSettings(JSON.parse(storedSettings));
    }
  }, []);

  let themeMode = lightTheme;
  switch (settings.theme) {
    case "dark":
      themeMode = darkTheme;
      break;
    case "classic":
      themeMode = classicTheme;
      break;
    default:
      break;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles settings={settings} />
        <WindowManager />
      </div>
    </ThemeProvider>
  );
}

export default App;
