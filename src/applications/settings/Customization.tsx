import { useState } from "react";
import styled from 'styled-components';
import ThemePicker from "./ThemePicker";

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

const Customization = () => {
  const setDefaultSettings = () => {
    updateOpacity(0.8);
    updateFont("modern");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const [opacity, setOpacity] = useState<number | null>(Number(document.documentElement.style.getPropertyValue("--bgopacity")) || 0.8);
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
            ></input>
          </label>
          <br />
          <label>
            Bottom Menubar
            <input
              type="checkbox"
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
