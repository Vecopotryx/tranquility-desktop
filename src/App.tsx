import { useEffect, useState } from "react";
import { WindowListProvider } from "./contexts/WindowContext";
import { loadTheming } from "./services/settings-loader";
import WindowManager from "./core/WindowManager";
import Menubar from "./core/Menubar";
import { AppContextProvider } from "./contexts/AppContext";
import { Panel } from "./core/Panel";

type Widget = {
  name: string;
  component: JSX.Element;
};

interface PanelProps {
  position: string;
  widgets: Widget[];
}

const testPanel = {
  position: "top",
  widgets: [
    {
      name: "test",
      component: <div>test</div>,
    },
  ],
};

function App() {
  useEffect(() => {
    loadTheming();
  }, []);

  const [panelList, setPanelList] = useState<PanelProps[]>([testPanel]);

  return (
    <WindowListProvider>
      <AppContextProvider>
        {panelList.map(({position, widgets}, index) => (
          <Panel
            key={index}
            position={position}
            widgets={widgets}
          />
        ))}

        <Menubar />
        <WindowManager />
      </AppContextProvider>
    </WindowListProvider>
  );
}

export default App;
