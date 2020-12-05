import React, { UseState } from "react";
import Menubar from "./components/menubar";
import { useDarkMode } from './styles/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import WindowManager from "./components/WindowManager";


function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div>
        <GlobalStyles/>
        <Menubar/>
        <WindowManager/>
      </div>
    </ThemeProvider>
  );
}

export default App;
