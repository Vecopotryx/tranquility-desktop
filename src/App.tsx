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
    const storedSettings = localStorage.getItem('string');
    if(storedSettings !== null){
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

          <WindowManager/>
        </div>
      </ThemeProvider>
  );
}

/*
The current GlobalStyles component doesn't seem to work properly after migrating to TypeScript, so I'll rewrite GlobalStyles before adding it back.
          <GlobalStyles
            background={settings.background}
            scale={settings.scale}
            customizeSettings={settings}
          />*/

export default App;