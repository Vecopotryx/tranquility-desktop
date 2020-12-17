import React, { useState } from "react";
import { GlobalStyles, lightTheme, darkTheme, classicTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import WindowManager from './components/WindowManager';

function App() {
  const [background, setBackground] = useState("url('https://raw.githubusercontent.com/Vecopotryx/retro-desktop-environment/master/source/img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg')");  
  const [customizeSettings, setCustomizeSettings] = useState({theme: "dark", scale: 1, connectedMenubar: false, bottomMenubar: false});

  let themeMode = lightTheme;
  switch(customizeSettings.theme){
    case 'dark':
      themeMode = darkTheme;
      break;
    case 'classic':
      themeMode = classicTheme;
      break;
    case 'platinum':
      break;
    default:
      break;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles background={background} scale={customizeSettings.scale} customizeSettings={customizeSettings}/>
        <WindowManager background={background} setBackground={setBackground} customizeSettings={customizeSettings} setCustomizeSettings={setCustomizeSettings}/>
      </div>
    </ThemeProvider>
  );
}

export default App;

