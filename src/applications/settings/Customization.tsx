import { Dispatch, SetStateAction, useState } from "react";
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

  const [theme, setTheme] = useState<string | null>(document.documentElement.getAttribute("data-theme"));
  const updateTheme = (theme: string) => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    updateSettings("theme", theme)
  }

  const [opacity, setOpacity] = useState<number | null>(Number(document.documentElement.style.getPropertyValue("--bgopacity")));
  const updateOpacity = (Opacity: number) => {
    setOpacity(Opacity);
    document.documentElement.style.setProperty('--bgopacity', Opacity.toString());
  }

  const [font, setFont] = useState<string | null>(document.documentElement.style.getPropertyValue("--font"));
  const updateFont = (font: string) => {
    setFont(font);
    document.documentElement.style.setProperty('--font', font === "modern" ? "" : font);
  }

  interface Props {
    themeIn: string;
    image: string;
  }

  const ThemePreview = ({ themeIn, image }: Props) => {
    return (
      <div>
        <div
          style={{ backgroundSize: "cover", backgroundImage: settings.background, borderRadius: "5px", width: "100%" }}
          onClick={() => updateTheme(themeIn.toLocaleLowerCase())}
        >
          <img src={image} width="100%" alt={themeIn.toLowerCase()} />
        </div>
        <label>
          <input
            type="radio"
            value={themeIn.toLowerCase()}
            checked={theme === themeIn.toLocaleLowerCase()}
            onChange={(e) => updateTheme(e.target.value)}
          />
          {themeIn}
        </label>
      </div>
    );
  };

  return (
    <div style={{ padding: "2%", userSelect: "none" }}>
      <ThemePreviews>
        <ThemePreview themeIn={"Light"} image={lightPreview} />
        <ThemePreview themeIn={"Dark"} image={darkPreview} />
        <ThemePreview themeIn={"Classic"} image={classicPreview} />
      </ThemePreviews>
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
