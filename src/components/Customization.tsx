import React, { Dispatch, SetStateAction, useState } from "react";
import darkmodeImage from "./darkmode-temporary.svg";

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
  const [currentSettings, setCurrentSettings] = useState(settings);

  const setDefaultSettings = () => {
    const defaultSettings = {
      theme: "dark",
      scale: 1,
      connectedMenubar: false,
      bottomMenubar: false,
      opacity: 1,
      font: "modern",
      usingLocalStorage: currentSettings.usingLocalStorage,
      background: settings.background,
    };
    setCurrentSettings(defaultSettings);
    setSettings(defaultSettings);
    localStorage.clear();
  };

  const updateSettings = (property:string, value:string|boolean|number) => {
    const newCurrentSettings = { ...currentSettings, [property]: value };
    setCurrentSettings(newCurrentSettings);
    setSettings(newCurrentSettings);
    if (newCurrentSettings.usingLocalStorage) {
      localStorage.setItem(
        "settings",
        JSON.stringify(newCurrentSettings)
      );
    }
  };

  const toggleLocalStorage = (event: { target: HTMLInputElement }) => {
    updateSettings("usingLocalStorage", event.target.checked);
    if (!event.target.checked) {
      localStorage.clear();
    }
  };

  return (
    <div className="customization">
      <div className="themePicker">
        <h2>Theme</h2>
        <div className="settingsPreviewsHolder">
          <div
            className="settingsPreviews"
            style={{
              backgroundImage: settings.background,
              marginRight: "1%",
            }}
          >
            <img
              className="settingsThemePreview"
              src={darkmodeImage}
              width="100%"
              alt="Light"
              onClick={() => updateSettings("theme", "light")}
            ></img>
          </div>
          <div
            className="settingsPreviews"
            style={{ backgroundImage: settings.background }}
            onClick={() => updateSettings("theme", "dark")}
          >
            <img
              className="settingsThemePreview"
              src={darkmodeImage}
              width="100%"
              alt="Dark"
            ></img>
          </div>
          <div
            className="settingsPreviews"
            style={{
              backgroundImage: settings.background,
              marginLeft: "1%",
            }}
            onClick={() => updateSettings("theme", "classic")}
          >
            <img
              className="settingsThemePreview"
              src={darkmodeImage}
              width="100%"
              alt="Classic"
            ></img>
          </div>
        </div>

        <div className="settingsThemeRadiosHolder">
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="light"
              checked={currentSettings.theme === "light"}
              onChange={(e) => updateSettings("theme", e.target.value)}
            />
            Light
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="dark"
              checked={currentSettings.theme === "dark"}
              onChange={(e) => updateSettings("theme", e.target.value)}
            />
            Dark
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="classic"
              checked={currentSettings.theme === "classic"}
              onChange={(e) => updateSettings("theme", e.target.value)}
            />
            Classic
          </label>
        </div>
      </div>
      <div className="backgroundPicker">
        <h2>Misc</h2>
        <label>
          Connected Menubar
          <input
            type="checkbox"
            checked={currentSettings.connectedMenubar}
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
            checked={currentSettings.bottomMenubar}
            onChange={(e) => updateSettings("bottomMenubar", e.target.checked)}
          ></input>
        </label>
        <br />
        <label>
          Button Placement
          <select>
            <option value="RDE">RDE</option>
            <option value="redmond">Redmond</option>
            <option value="cupertino">Cupertino</option>
          </select>
        </label>
        <br />
        <label>
          UI Scale
          <input
            type="range"
            min="5"
            max="30"
            value={currentSettings.scale * 10}
            step="1"
            onChange={(e) => updateSettings("scale", e.target.value)}  // Supposed to divide by 10, but having type errors atm, will look into this.
          ></input>
          <a>{currentSettings.scale}</a>
        </label>
        <br />
        <label>
          Opacity
          <input
            type="range"
            min="1"
            max="10"
            value={currentSettings.opacity * 10}
            step="1"
            onChange={(e) => updateSettings("opacity", e.target.value)} // Supposed to divide by 10, but having type errors atm, will look into this.
          ></input>
          <a>{currentSettings.opacity}</a>
        </label>
        <h2>Font</h2>
        <label>
          <input
            type="radio"
            value="modern"
            checked={currentSettings.font === "modern"}
            onChange={(e) => updateSettings("font", e.target.value)}
          />
          <a style={{ fontFamily: "Sans-serif" }}>Modern</a>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="retro"
            checked={currentSettings.font === "retro"}
            onChange={(e) => updateSettings("font", e.target.value)}
          />
          <a style={{ fontFamily: "retro" }}>Retro</a>
        </label>
        <hr />
        <label>
          Use cookies/localStorage
          <input
            type="checkbox"
            checked={currentSettings.usingLocalStorage}
            onChange={toggleLocalStorage}
          ></input>
        </label>
        <button onClick={setDefaultSettings}>Revert to default settings</button>
      </div>
    </div>
  );
};

export default Customization;
