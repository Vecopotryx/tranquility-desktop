import React, { useState } from "react";
import "../assets/styles/componentStyles/Greeter.css";
import Logo from "../assets/img/LogoSideView.png";
import darkPreview from "../assets/img/preview-dark.svg";
import lightPreview from "../assets/img/preview-light.svg";
import classicPreview from "../assets/img/preview-classic.svg";
import { useSettings } from "../contexts/SettingsContext";
import defaultBackground1 from "../assets/img/backgrounds/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg";
import BackgroundPicker from "./settings/BackgroundPicker";

const Greeter = (props: any) => {
  const [currentScreen, setCurrentScreen] = useState("greeting");

  const settings = useSettings().customizeSettings;
  const setSettings = useSettings().setCustomizeSettings;

  const Greeting = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <img className="welcomeLogo" src={Logo} alt=""></img>
        <div className="welcomeText">
          <h1>Welcome to Retro Desktop Environment</h1>
          <p>
            Configure themes and other settings by pressing the forward button, or press the back button to use default settings.
          </p>
        </div>
        <div className="buttonHolder">
          <h1
            className="backButton"
            onClick={() => props.handleClose(props.id)}
          >
            &#11164;
          </h1>
          <h1
            className="forwardButton"
            onClick={() => setCurrentScreen("theme")}
          >
            &#10148;
          </h1>
        </div>
      </div>
    );
  };

  const updateSettings = (
    property: string,
    value: string | boolean | number
  ) => {
    let newSettings = { ...settings, [property]: value };
    setSettings(newSettings);
    if (newSettings.usingLocalStorage) {
      localStorage.setItem(
        "settings",
        JSON.stringify({
          ...newSettings,
          background:
            "url(" + defaultBackground1 + ")",
        })
      );
    }
  };

  // TODO: Should perhaps try to import this functionality from Settings instead.
  interface Props {
    theme: string;
    image: string;
  }

  const ThemePreview = ({ theme, image }: Props) => {
    return (
      <div>
        <div
          className="settingsPreviews"
          style={{ backgroundImage: settings.background }}
          onClick={() => updateSettings("theme", theme.toLowerCase())}
        >
          <img
            className="settingsThemePreview"
            src={image}
            width="100%"
            alt={theme.toLowerCase()}
          ></img>
        </div>
        <label className="settingsThemeRadios">
          <input
            type="radio"
            value={theme.toLowerCase()}
            checked={settings.theme === theme.toLowerCase()}
            onChange={(e) => updateSettings("theme", e.target.value)}
          />
          {theme}
        </label>
      </div>
    );
  };

  interface ButtonProps {
    previous: string;
    next: string;
  }

  const ForwardBackButtons = ({ previous, next }: ButtonProps) => {
    return (
      <div className="buttonHolder">
        <h1
          className="backButton"
          onClick={() => setCurrentScreen(previous)}
        >
          &#11164;
        </h1>
        <h1
          className="forwardButton"
          onClick={() => setCurrentScreen(next)}
        >
          &#10148;
        </h1>
      </div>
    )
  }

  const GreeterTheme = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Lets pick a theme</h1>
        <div style={{ padding: "1em" }} className={"themePreviews"}>
          <ThemePreview theme={"Light"} image={lightPreview} />
          <ThemePreview theme={"Dark"} image={darkPreview} />
          <ThemePreview theme={"Classic"} image={classicPreview} />
        </div>
        <p>Font:</p>
        <label style={{ paddingRight: "0.5em" }}>
          <input
            type="radio"
            value="modern"
            checked={settings.font === "modern"}
            onChange={(e) => updateSettings("font", e.target.value)}
          />
          <p style={{ fontFamily: "Sans-serif" }}>Modern</p>
        </label>
        <label>
          <input
            type="radio"
            value="retro"
            checked={settings.font === "retro"}
            onChange={(e) => updateSettings("font", e.target.value)}
          />
          <p style={{ fontFamily: "retro" }}>Retro</p>
        </label>
        <ForwardBackButtons previous="greeting" next="background" />
      </div>
    );
  };

  const GreeterBackground = () => {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Lets pick a background</h1>
        <BackgroundPicker settings={settings} setSettings={setSettings} />

        <ForwardBackButtons previous="theme" next="complete" />
      </div>
    );
  };

  const Complete = () => {
    return (
      <div>
        <div style={{ marginLeft: "1%", textAlign: "center" }}>
          <h1>Setup complete</h1>
          <h4>You can change these settings (and more) later using the settings app.</h4>
        </div>
        <div className="buttonHolder">
          <h1
            className="backButton"
            onClick={() => setCurrentScreen("background")}
          >
            &#11164;
          </h1>
          <h1
            className="forwardButton"
            onClick={() => {
              localStorage.setItem("greeted", "true");
              props.handleClose(props.id);
            }}
          >
            Start using RDE &#10148;
          </h1>
        </div>
      </div>
    );
  };

  const CurrentScreen = () => {
    switch (currentScreen) {
      case "greeting":
        return <Greeting />;
      case "theme":
        return <GreeterTheme />;
      case "background":
        return <GreeterBackground />;
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
