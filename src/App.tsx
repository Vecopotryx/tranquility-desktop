import { useEffect } from "react";
import { GlobalStyles } from "./core/GlobalStyles";
import { useSettings } from "./contexts/SettingsContext";
import { WindowListProvider } from "./contexts/WindowContext";
import WindowManager from "./core/WindowManager";
import Menubar from "./core/Menubar";
import "./assets/styles/StaticStyles.css";

function App() {
  const settings = useSettings().customizeSettings;
  //const setSettings = useSettings().setCustomizeSettings;

  useEffect(() => {
    /*const storedSettings = localStorage.getItem("settings");
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }*/

    const theme = localStorage.getItem("theme");
    const opacity = localStorage.getItem("opacity");
    const font = localStorage.getItem("font");
    if (theme) { document.documentElement.setAttribute("data-theme", theme); }
    if (opacity) { document.documentElement.style.setProperty('--bgopacity', opacity); }
    if (font) { document.documentElement.style.setProperty('--font', font === "modern" ? "" : font) }
  }, []);

  return (
    <>
      <GlobalStyles settings={settings} />
      <WindowListProvider>
        <Menubar />
        <WindowManager />
      </WindowListProvider>
    </>
  );
}

export default App;
