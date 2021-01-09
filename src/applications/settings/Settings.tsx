import React, { ReactElement, useState } from "react";
import Customization from "./Customization";
import BackgroundPicker from "./BackgroundPicker";
import About from "./About";
import { useSettings } from "../../contexts/SettingsContext";

const Settings = () => {
  const [openSettings, setOpenSettings] = useState("Customization");

  const settings = useSettings().customizeSettings;
  const setSettings = useSettings().setCustomizeSettings;

  const OpenedSettings = (): ReactElement => {
    switch (openSettings.toLowerCase()) {
      case "customization":
        return <Customization settings={settings} setSettings={setSettings} />;
      case "background":
        return (
          <BackgroundPicker settings={settings} setSettings={setSettings} />
        );
      case "about":
        return (
          <About />
        );
      default:
        break;
    }
    return <h1>Error</h1>;
  };

  return (
    <div>
      <div className="settings">
        <h2>{openSettings}</h2>
        <button onClick={() => setOpenSettings("Customization")}>
          Customization
        </button>
        <button onClick={() => setOpenSettings("Background")}>
          Background
        </button>
        <button onClick={() => setOpenSettings("About")}>About</button>
      </div>
      <OpenedSettings />
    </div>
  );
};

export default Settings;
