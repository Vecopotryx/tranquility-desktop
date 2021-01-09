import React, { ReactElement, useState } from "react";
import Customization from "./Customization";
import BackgroundPicker from "./BackgroundPicker";
import About from "./About";
import { useSettings } from "../../contexts/SettingsContext";
import "../../assets/styles/componentStyles/Settings.css";

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
        return <About />;
      default:
        break;
    }
    return <h1>Error</h1>;
  };

  const SettingsButton = ({setting}: {setting: string}) => {
    return (
      <>
        {openSettings === setting ? (
          <h2>{setting}</h2>
        ) : (
          <button onClick={() => setOpenSettings(setting)}>{setting}</button>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="settings">
          <SettingsButton setting="Customization"/>
          <SettingsButton setting="Background"/>
          <SettingsButton setting="About"/>
      </div>
      <OpenedSettings />
    </div>
  );
};

export default Settings;
