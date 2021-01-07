import React, { useEffect } from "react";
import { GlobalStyles, getTheme } from "./core/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useSettings } from "./contexts/SettingsContext";
import WindowManager from "./core/WindowManager";
import "./assets/styles/StaticStyles.css";

function App() {
  const settings = useSettings().customizeSettings;
  const setSettings = useSettings().setCustomizeSettings;

  useEffect(() => {
    const storedSettings = localStorage.getItem("settings");
    if (storedSettings !== null) {
      setSettings(JSON.parse(storedSettings));
    }
  }, [setSettings]);

  return (
    <ThemeProvider theme={getTheme(settings.theme)}>
      <div>
        <GlobalStyles settings={settings} />
        <WindowManager />
      </div>
    </ThemeProvider>
  );
}

export default App;
