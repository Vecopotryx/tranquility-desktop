import { Dispatch, SetStateAction, useState } from "react";
import defaultBackground1 from "../../assets/img/backgrounds/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg";
import styled from 'styled-components';
import ThemePicker from "./ThemePicker";

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


const OtherSettings = styled.div`
  text-align: center;
  margin: auto;

  & div {
    display: inline-block;
    margin-right: 2%;
    margin-left: 2%;
    text-align: center;
  }
`;

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
            "url(" + defaultBackground1 + ")",
        })
      );
    }
  };

  const [opacity, setOpacity] = useState<number | null>(Number(document.documentElement.style.getPropertyValue("--bgopacity")));
  const updateOpacity = (Opacity: number) => {
    setOpacity(Opacity);
    document.documentElement.style.setProperty('--bgopacity', Opacity.toString());
    localStorage.setItem("opacity", Opacity.toString());
  }

  const [font, setFont] = useState<string | null>(document.documentElement.style.getPropertyValue("--font"));
  const updateFont = (font: string) => {
    setFont(font);
    document.documentElement.style.setProperty('--font', font === "modern" ? "" : font);
    localStorage.setItem("font", font);
  }

  return (
    <div style={{ padding: "2%", userSelect: "none" }}>
      <ThemePicker />
      <OtherSettings>
        <div>
          <h2>Font</h2>
          <label>
            <input
              type="radio"
              value="modern"
              checked={font === "modern" || font === ""}
              onChange={(e) => updateFont(e.target.value)}
            />
            <p style={{ fontFamily: "Sans-serif" }}>Modern</p>
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="retro"
              checked={font === "retro"}
              onChange={(e) => updateFont(e.target.value)}
            />
            <p style={{ fontFamily: "retro" }}>Retro</p>
          </label>
        </div>
        <div>
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
        <div>
          <h2>Misc</h2>
          <label>
            Opacity
            <input
              type="range"
              min="1"
              max="10"
              value={opacity ? opacity * 10 : 10}
              step="1"
              onChange={(e) =>
                updateOpacity(Number(e.target.value) / 10)
              }
            ></input>
            <p>{opacity}</p>
          </label>
        </div>
        <div>
          <h2>Misc 2</h2>
          <button onClick={setDefaultSettings}>
            Revert to default settings
          </button>
          <br />
          <button onClick={() => localStorage.clear()}>
            ⚠️ Clear localStorage
          </button>
        </div>
      </OtherSettings>
    </div>
  );
};

export default Customization;
