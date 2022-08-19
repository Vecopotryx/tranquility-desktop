import { useEffect } from "react";
import { WindowListProvider } from "./contexts/WindowContext";
import { loadTheming } from "./services/settings-loader";
import WindowManager from "./core/WindowManager";
import Menubar from "./core/Menubar";

function App() {
  useEffect(() => {
    loadTheming();
  }, []);

  return (
    <WindowListProvider>
      <Menubar />
      <WindowManager />
    </WindowListProvider>
  );
}

export default App;
