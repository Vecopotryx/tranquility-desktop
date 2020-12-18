import React, { useState } from "react";
import darkmodeImage from "./darkmode-temporary.svg";

export default function Customization(props) {
  const [currentSettings, setCurrentSettings] = useState(
    props.customizeSettings
  );

  // - Need to allow user to click image to select theme.

  const themeHandler = (changeEvent) => {
    const newCurrentSettings = { ...currentSettings, theme: changeEvent.target.value };
    setCurrentSettings(newCurrentSettings);
    props.setCustomizeSettings(newCurrentSettings);
    localStorage.setItem('customizeSettings', JSON.stringify(newCurrentSettings));
  };

  const onScaleChange = (changeEvent) => {
    const newCurrentSettings = { ...currentSettings, scale: changeEvent.target.value / 10 };
    setCurrentSettings(newCurrentSettings);
    props.setCustomizeSettings(newCurrentSettings);
    localStorage.setItem('customizeSettings', JSON.stringify(newCurrentSettings));
  };

  const handleConnectedMenubar = (changeEvent) => {
    const newCurrentSettings = { ...currentSettings, connectedMenubar: changeEvent.target.checked };
    setCurrentSettings(newCurrentSettings);
    props.setCustomizeSettings(newCurrentSettings);
    localStorage.setItem('customizeSettings', JSON.stringify(newCurrentSettings));
  };

  const handleBottomMenubar = (changeEvent) => {
    const newCurrentSettings = { ...currentSettings, bottomMenubar: changeEvent.target.checked };
    setCurrentSettings(newCurrentSettings);
    props.setCustomizeSettings(newCurrentSettings);
    localStorage.setItem('customizeSettings', JSON.stringify(newCurrentSettings));
  };

  const onOpacityChange = (changeEvent) => {
    const newCurrentSettings = { ...currentSettings, opacity: changeEvent.target.value / 10 };
    setCurrentSettings(newCurrentSettings);
    props.setCustomizeSettings(newCurrentSettings);
    localStorage.setItem('customizeSettings', JSON.stringify(newCurrentSettings));
  };

  const fontHandler = (changeEvent) => {
    const newCurrentSettings = { ...currentSettings, font: changeEvent.target.value };
    setCurrentSettings(newCurrentSettings);
    props.setCustomizeSettings(newCurrentSettings);
    localStorage.setItem('customizeSettings', JSON.stringify(newCurrentSettings));
  };

  const setDefaultSettings = () => {
    localStorage.clear();
    setCurrentSettings({
      theme: "dark",
      scale: 1,
      connectedMenubar: false,
      bottomMenubar: false,
      opacity: 1,
      font: "modern",
    });
    props.setCustomizeSettings({
      theme: "dark",
      scale: 1,
      connectedMenubar: false,
      bottomMenubar: false,
      opacity: 1,
      font: "modern",
    });
  };

  return (
    <div className="customization">
      <div className="themePicker">
        <h2>Theme</h2>
        <div className="settingsPreviewsHolder">
          <div
            className="settingsPreviews"
            style={{
              backgroundImage: props.background,
              marginRight: "1%",
            }}
          >
            <img
              className="settingsThemePreview"
              src={darkmodeImage}
              width="100%"
              alt=""
            ></img>
          </div>
          <div
            className="settingsPreviews"
            style={{ backgroundImage: props.background }}
          >
            <img
              className="settingsThemePreview"
              src={darkmodeImage}
              width="100%"
              alt=""
            ></img>
          </div>
          <div
            className="settingsPreviews"
            style={{
              backgroundImage: props.background,
              marginLeft: "1%",
            }}
          >
            <img
              className="settingsThemePreview"
              src={darkmodeImage}
              width="100%"
              alt=""
            ></img>
          </div>
        </div>

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
      </div>
      <div className="backgroundPicker">
        <h2>Misc</h2>
        <label>
          Connected Menubar
          <input
            type="checkbox"
            checked={currentSettings.connectedMenubar}
            onChange={handleConnectedMenubar}
          ></input>
        </label>
        <br />
        <label>
          Bottom Menubar
          <input
            type="checkbox"
            checked={currentSettings.bottomMenubar}
            onChange={handleBottomMenubar}
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
            onChange={onScaleChange}
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
            onChange={onOpacityChange}
          ></input>
          <a>{currentSettings.opacity}</a>
        </label>
        <h2>Font</h2>
        <label>
          <input
            type="radio"
            value="modern"
            checked={currentSettings.font === "modern"}
            onChange={fontHandler}
          />
          <a style={{ fontFamily: "Sans-serif" }}>Modern</a>
        </label>
        <br />
        <label>
          <input
            type="radio"
            value="retro"
            checked={currentSettings.font === "retro"}
            onChange={fontHandler}
          />
          <a style={{ fontFamily: "retro" }}>Retro</a>
        </label>
        <hr/>
        <button onClick={setDefaultSettings}>Revert to default settings</button>
      </div>
    </div>
  );
}