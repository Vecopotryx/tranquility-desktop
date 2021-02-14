import React, { useState } from "react";
import "../assets/styles/componentStyles/Greeter.css";
import Logo from "../assets/img/LogoSideView.png";
import Settings from "./settings/Settings";
import { useSettings } from "../contexts/SettingsContext";

const Greeter = (props: any) => {
  const [currentScreen, setCurrentScreen] = useState("greeting");

  const settings = useSettings().customizeSettings;
  const setSettings = useSettings().setCustomizeSettings;

  const Greeting = () => {
    return (
      <div style={{textAlign: "center"}}>
        <img className="welcomeLogo" src={Logo}></img>
        <div className="welcomeText">
          <h1>Welcome to Retro Desktop Environment</h1>
          <p>
            Configure themes and other settings by pressing the configure button
          </p>
        </div>
        <div className="buttonHolder">
          <button
            className="backButton"
            onClick={() => {
              let newSettings = { ...settings, usingLocalStorage: false };
              setSettings(newSettings);
              props.handleClose(props.id);
            }}
          >
            Continue with default settings
          </button>
          <button
            className="forwardButton"
            onClick={() => setCurrentScreen("settings")}
          >
            Configure
          </button>
        </div>
      </div>
    );
  };

  const GreeterSettings = () => {
    return (
      <div>
        <Settings></Settings>
        <div className="buttonHolder">
          <button
            className="backButton"
            onClick={() => setCurrentScreen("greeting")}
          >
            Go back
          </button>
          <button
            className="forwardButton"
            onClick={() => setCurrentScreen("complete")}
          >
            Continue
          </button>
        </div>
      </div>
    );
  };

  const Complete = () => {
    return (
      <div>
        <div style={{marginLeft: "1%"}}>
        <h1>Setup complete</h1>
        <h4>You can change these settings later using the settings app</h4>
        </div>
        <div className="buttonHolder">
          <button
            className="backButton"
            onClick={() => setCurrentScreen("settings")}
          >
            Go back
          </button>
          <button
            className="forwardButton"
            onClick={() => props.handleClose(props.id)}
          >
            Start using RDE
          </button>
        </div>
      </div>
    );
  };

  const CurrentScreen = () => {
    switch (currentScreen) {
      case "greeting":
        return <Greeting />;
      case "settings":
        return <GreeterSettings />;
      case "complete":
        return <Complete />;
      default:
        return <h2>Error</h2>;
    }
  };

  return (
    <div>
      <CurrentScreen />
    </div>
  );
};

export default Greeter;
