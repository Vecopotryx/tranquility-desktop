import React, { useState } from "react";
import { GlobalStyles, lightTheme, darkTheme, classicTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import WindowManager from './components/WindowManager';

function App() {
  const [theme, setTheme] = useState("dark");
  const [background, setBackground] = useState("url('https://raw.githubusercontent.com/Vecopotryx/retro-desktop-environment/master/source/img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg');");

  let themeMode = lightTheme;
  switch(theme){
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
        <GlobalStyles background={background} />
        <WindowManager theme={theme} setTheme={setTheme} background={background} setBackground={setBackground}/>
      </div>
    </ThemeProvider>
  );
}

export default App;

