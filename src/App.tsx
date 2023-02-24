import { useEffect } from "react";
import { WindowListProvider } from "./contexts/WindowContext";
import { loadTheming } from "./services/settings-loader";
import WindowManager from "./core/WindowManager";
import Menubar from "./core/Menubar";
import { AppContextProvider } from "./contexts/AppContext";

function App() {
  useEffect(() => {
    loadTheming();
  }, []);

  return (
    <WindowListProvider>
      <AppContextProvider>
        <Menubar />
        <WindowManager />
      </AppContextProvider>
    </WindowListProvider>
  );
}

export default App;
