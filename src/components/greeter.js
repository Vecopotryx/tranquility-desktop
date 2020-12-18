import React, { useState } from "react";
import "./greeter.css";

export default function Welcome(props) {
  const [currentScreen, setCurrentScreen] = useState("greeting");
  const [currentSettings, setCurrentSettings] = useState(
    props.customizeSettings
  );

  const themeHandler = (changeEvent) => {
    setCurrentSettings({ ...currentSettings, theme: changeEvent.target.value });
    props.setCustomizeSettings({
      ...currentSettings,
      theme: changeEvent.target.value,
    });
  };

  const Greeting = () => {
    return (
      <div>
        <h1>Welcome to Retro Desktop Environment</h1>
        <p>
          Configure themes and other settings by pressing the configure button
        </p>
        <div className="buttonHolder">
        <button className="backButton">Continue with default settings</button>
        <button className="forwardButton" onClick={() => setCurrentScreen("themes")}>Configure</button>
        </div>
      </div>
    );
  };

  const Themes = () => {
    return (
      <div>
        <h1>Themes</h1>
        <div className="settingsThemeRadiosHolder">
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="light"
              checked={currentSettings.theme === "light"}
              onChange={themeHandler}
            />
            Light
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="dark"
              checked={currentSettings.theme === "dark"}
              onChange={themeHandler}
            />
            Dark
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="classic"
              checked={currentSettings.theme === "classic"}
              onChange={themeHandler}
            />
            Classic
          </label>
        </div>
        <div className="buttonHolder">
        <button className="backButton" onClick={() => setCurrentScreen("greeting")}>Go back</button>
        <button className="forwardButton" onClick={() => setCurrentScreen("misc")}>Continue</button>
        </div>
      </div>
    );
  };

  // should perhaps try to call from customization settings instead of copying the code :/

  const Misc = () => {
    return (
      <div>
          <h1>Misc</h1>
        <label>
            Remember settings (enable cookies)
          <input
            type="checkbox"
          ></input>
          <br/>
        </label>
        <div className="buttonHolder">
        <button className="backButton" onClick={() => setCurrentScreen("themes")}>Go back</button>
        <button className="forwardButton" onClick={() => setCurrentScreen("complete")}>Continue</button>
        </div>
      </div>
    );
  };

  const Complete = () => {
    return (
      <div>
          <h1>Setup complete</h1>
          <h4>You can change these settings (and more) later using the settings app</h4>
          <div className="buttonHolder">
        <button className="backButton" onClick={() => setCurrentScreen("misc")}>Go back</button>
        <button className="forwardButton" onClick={() => props.handleClose}> 
          Start using RDE
        </button>
        </div>
      </div>
    );
    // Will have to rewrite parts of the Window Manager before I'm able to implement proper exit buttons
  };

  const CurrentScreen = () => {
    switch (currentScreen) {
      case "greeting":
        return <Greeting />;
      case "themes":
        return <Themes />;
      case "misc":
        return <Misc />;
      case "complete":
        return <Complete />;
      default:
        return <h2>Error</h2>;
    }
  };

  return (
    <div className="greeter">
      <CurrentScreen />
    </div>
  );
}
