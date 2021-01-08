import React, { useEffect } from "react";
import { GlobalStyles, getTheme } from "./core/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { useSettings } from "./contexts/SettingsContext";
import WindowManager from "./core/WindowManager";
import "./assets/styles/StaticStyles.css";
import { WindowListProvider } from "./contexts/WindowContext";
import Menubar from "./core/Menubar";

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
        <WindowListProvider>
          <Menubar />
          <WindowManager />
        </WindowListProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
