import { Dispatch, SetStateAction } from "react";
import darkPreview from "../../assets/img/preview-dark.svg";
import lightPreview from "../../assets/img/preview-light.svg";
import classicPreview from "../../assets/img/preview-classic.svg";
import "../../assets/styles/componentStyles/Settings.css";
import defaultBackground1 from "../../assets/img/backgrounds/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg";
import styled from 'styled-components';

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


const ThemePreviews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1%;

  & div {
    display: inline-block;
    text-align: center;
  }
`;

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
          style={{ backgroundSize: "cover", backgroundImage: settings.background, borderRadius: "5px", width: "100%" }}
          onClick={() => updateSettings("theme", theme.toLowerCase())}
        >
          <img src={image} width="100%" alt={theme.toLowerCase()} />
        </div>
        <label>
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
    <div style={{ padding: "2%", userSelect: "none" }}>
      <ThemePreviews>
        <ThemePreview theme={"Light"} image={lightPreview} />
        <ThemePreview theme={"Dark"} image={darkPreview} />
        <ThemePreview theme={"Classic"} image={classicPreview} />
      </ThemePreviews>
      <OtherSettings>
        <div>
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
            UI Scale
            <input
              type="range"
              min="5"
              max="30"
              defaultValue={settings.scale * 10}
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
              defaultValue={settings.opacity * 10}
              step="1"
              onChange={(e) =>
                updateSettings("opacity", Number(e.target.value) / 10)
              }
            ></input>
            <p>{settings.opacity}</p>
          </label>
        </div>
        <div>
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
      </OtherSettings>
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
