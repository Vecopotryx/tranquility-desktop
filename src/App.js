import React, { useState } from "react";
import Menubar from "./components/menubar";
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import WindowManager from './components/WindowManager';

function App() {
  const [theme, setTheme] = useState("dark");
  
  let themeMode = lightTheme;
  switch(theme){
    case 'dark':
      themeMode = darkTheme;
      break;
    case 'classic':
      break;
    case 'platinum':
      break;
    default:
      break;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles/>
        <Menubar/>
        <WindowManager theme={theme} setTheme={setTheme} />
      </div>
    </ThemeProvider>
  );
}

export default App;

