import React, { useEffect } from "react";
import {
  GlobalStyles,
  lightTheme,
  darkTheme,
  classicTheme,
} from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import WindowManager from "./components/WindowManager";
import { useSettings } from "./components/SettingsContext";

function App() {
  const settings = useSettings().customizeSettings;
  const setSettings = useSettings().setCustomizeSettings;
  
  useEffect(() => {
    const storedSettings = JSON.parse(localStorage.getItem('customizeSettings'));
    if(storedSettings != null){
      setSettings(storedSettings);
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
          <GlobalStyles
            background={settings.background}
            scale={settings.scale}
            customizeSettings={settings}
          />
          <WindowManager
            background={settings.background}
            customizeSettings={settings}
          />
        </div>
      </ThemeProvider>
  );
}

export default App;