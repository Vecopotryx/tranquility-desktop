import { useEffect } from "react";
import { GlobalStyles } from "./core/GlobalStyles";
import { useSettings } from "./contexts/SettingsContext";
import { WindowListProvider } from "./contexts/WindowContext";
import WindowManager from "./core/WindowManager";
import Menubar from "./core/Menubar";
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
