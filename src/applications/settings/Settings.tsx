import { ReactElement, useState } from "react";
import styled from "styled-components";
import Customization from "./Customization";
import BackgroundPicker from "./BackgroundPicker";
import About from "./About";

const ButtonHolder = styled.div`
  > button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
    font-family: inherit;
    color: var(--primary-color);
    outline: none;
}

  > button, > h2 {
    display: inline;
    user-select: none;
    padding-left: 3%;
    padding-right: 3%;
  }
`

const Settings = () => {
  const [openSettings, setOpenSettings] = useState("Customization");

  const OpenedSettings = (): ReactElement => {
    switch (openSettings.toLowerCase()) {
      case "customization":
        return <Customization />;
      case "background":
        return (
          <BackgroundPicker />
        );
      case "about":
        return <About />;
      default:
        break;
    }
    return <h1>Error</h1>;
  };

  const SettingsButton = ({ setting }: { setting: string }) => {
    return (
      <>
        {openSettings === setting ?
          <h2>{setting}</h2>
          :
          <button onClick={() => setOpenSettings(setting)}>{setting}</button>
        }
      </>
    );
  };

  return (
    <>
      <ButtonHolder>
        <SettingsButton setting="Customization" />
        <SettingsButton setting="Background" />
        <SettingsButton setting="About" />
      </ButtonHolder>
      <OpenedSettings />
    </>
  );
};

export default Settings;
