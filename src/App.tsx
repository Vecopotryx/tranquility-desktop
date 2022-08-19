import { useEffect } from "react";
import { WindowListProvider } from "./contexts/WindowContext";
import WindowManager from "./core/WindowManager";
import Menubar from "./core/Menubar";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const opacity = localStorage.getItem("opacity");
    const font = localStorage.getItem("font");
    if (theme) { document.documentElement.setAttribute("data-theme", theme); }
    if (opacity) { document.documentElement.style.setProperty('--bgopacity', opacity); }
    if (font) { document.documentElement.style.setProperty('--font', font === "modern" ? "" : font) }
  }, []);

  return (
    <WindowListProvider>
      <Menubar />
      <WindowManager />
    </WindowListProvider>
  );
}

export default App;
