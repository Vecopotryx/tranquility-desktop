import { useEffect, useState } from "react";
import { WindowListProvider } from "./contexts/WindowContext";
import { loadTheming } from "./services/settings-loader";
import WindowManager from "./core/WindowManager";
import { AppContextProvider } from "./contexts/AppContext";
import { Panel } from "./panels/Panel";
import { ShortcutList } from "./panels/widgets/ShortcutList";
import { InlineClock } from "./panels/widgets/InlineClock";
import { OpenWindowList } from "./panels/widgets/OpenWindowList";
import Settings from "./applications/settings/Settings";
import SettingsIcon from "./assets/img/icons/settings.png";

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
      name: "Applications",
      component: <ShortcutList text="Applications" />
    },
    {
      name: "Options",
      component: <ShortcutList text="Options" customList={[{ id: 0, name: "Settings", buttonText: "Settings", component: <Settings />, appIcon: SettingsIcon }]} />
    },
    {
      name: "OpenWindowList",
      component: <OpenWindowList /> 
    },
    {
      name: "Clock",
      component: <InlineClock />
    }
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

        {/* <Menubar /> */}
        <WindowManager />
      </AppContextProvider>
    </WindowListProvider>
  );
}

export default App;
