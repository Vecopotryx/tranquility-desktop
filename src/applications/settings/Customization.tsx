import React, { Dispatch, SetStateAction } from "react";
import darkPreview from "../../assets/img/preview-dark.svg";
import lightPreview from "../../assets/img/preview-light.svg";
import classicPreview from "../../assets/img/preview-classic.svg";
import "../../assets/styles/componentStyles/Settings.css";

interface SettingsTypes {
  theme: string;
  scale: number;
  connectedMenubar: boolean;
  bottomMenubar: boolean;
  opacity: number;
  font: string;
  usingLocalStorage: boolean;
  background: string;
}

interface CustomizationProps {
  settings: SettingsTypes;
  setSettings: Dispatch<SetStateAction<SettingsTypes>>;
}

const Customization = ({ settings, setSettings }: CustomizationProps) => {
  const setDefaultSettings = () => {
    const defaultSettings = {
      theme: "dark",
      scale: 1,
      connectedMenubar: false,
      bottomMenubar: false,
      opacity: 1,
      font: "modern",
      usingLocalStorage: settings.usingLocalStorage,
      background: settings.background,
    };
    setSettings(defaultSettings);
    localStorage.clear();
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
            "url(https://raw.githubusercontent.com/Vecopotryx/retro-desktop-environment/master/source/img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg)",
        })
      );
    }
  };

  const toggleLocalStorage = (event: { target: HTMLInputElement }) => {
    updateSettings("usingLocalStorage", event.target.checked);
    if (!event.target.checked) {
      localStorage.clear();
    }
  };

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

  return (
    <div className="customization">
      <div className={"themePreviews"}>
        <ThemePreview theme={"Light"} image={lightPreview} />
        <ThemePreview theme={"Dark"} image={darkPreview} />
        <ThemePreview theme={"Classic"} image={classicPreview} />
      </div>
      <div className="otherSettings">
        <div className="fontSettings">
          <h2>Font</h2>
          <label>
            <input
              type="radio"
              value="modern"
              checked={settings.font === "modern"}
              onChange={(e) => updateSettings("font", e.target.value)}
            />
            <p style={{ fontFamily: "Sans-serif" }}>Modern</p>
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="retro"
              checked={settings.font === "retro"}
              onChange={(e) => updateSettings("font", e.target.value)}
            />
            <p style={{ fontFamily: "retro" }}>Retro</p>
          </label>
        </div>
        <div className="menubarSettings">
          <h2>Menubar</h2>
          <label>
            Connected Menubar
            <input
              type="checkbox"
              checked={settings.connectedMenubar}
              onChange={(e) =>
                updateSettings("connectedMenubar", e.target.checked)
              }
            ></input>
          </label>
          <br />
          <label>
            Bottom Menubar
            <input
              type="checkbox"
              checked={settings.bottomMenubar}
              onChange={(e) =>
                updateSettings("bottomMenubar", e.target.checked)
              }
            ></input>
          </label>
          <br />
        </div>
        <div className="miscSettings">
          <h2>Misc</h2>
          <label>
            UI Scale
            <input
              type="range"
              min="5"
              max="30"
              value={settings.scale * 10}
              step="1"
              onChange={(e) =>
                updateSettings("scale", Number(e.target.value) / 10)
              }
            ></input>
            <p>{settings.scale}</p>
          </label>
          <br />
          <label>
            Opacity
            <input
              type="range"
              min="1"
              max="10"
              value={settings.opacity * 10}
              step="1"
              onChange={(e) =>
                updateSettings("opacity", Number(e.target.value) / 10)
              }
            ></input>
            <p>{settings.opacity}</p>
          </label>
        </div>
        <div className="miscSettings2">
          <h2>Misc 2</h2>
          <label>
            Use cookies/localStorage
            <input
              type="checkbox"
              checked={settings.usingLocalStorage}
              onChange={toggleLocalStorage}
            ></input>
          </label>
          <br />
          <button onClick={setDefaultSettings}>
            Revert to default settings
          </button>
        </div>
      </div>
    </div>
  );
};
/*
Perhaps at a later date:
        <label>
          Button Placement
          <select>
            <option value="RDE">RDE</option>
            <option value="redmond">Redmond</option>
            <option value="cupertino">Cupertino</option>
          </select>
        </label>
*/

export default Customization;
