import React, { Dispatch, SetStateAction, useState } from "react";
import defaultBackground1 from "../../assets/img/backgrounds/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg";
import defaultBackground2 from "../../assets/img/backgrounds/KDE Plasma Scenery 64 NO LOGO.jpg";
import defaultBackground3 from "../../assets/img/backgrounds/nasa-Q1p7bh3SHj8-unsplash.jpg";

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

interface BackgroundPickerProps {
  settings: SettingsTypes;
  setSettings: Dispatch<SetStateAction<SettingsTypes>>;
}

const BackgroundPicker = ({ settings, setSettings }: BackgroundPickerProps) => {
  const [unsplashTerm, setUnsplashTerm] = useState("");
  const [currentBackground, setCurrentBackground] = useState(
    settings.background
  );

  const onImageChange = (event: { target: HTMLInputElement }) => {
    if (event.target.files && event.target.files[0]) {
      let newImage = URL.createObjectURL(event.target.files[0]);
      setCurrentBackground("url(" + newImage + ") ");
      setBackground("url(" + newImage + ") ");
    }
  };

  const setBackground = (value: string) => {
    setSettings({ ...settings, background: value });
  };

  const unsplashHandler = () => {
    let widthHeight =
      window.screen.availWidth + "x" + window.screen.availHeight;
    let d = new Date();
    let newImage =
      "https://source.unsplash.com/" +
      widthHeight +
      "/?" +
      (unsplashTerm === "" ? "nature" : unsplashTerm) +
      "/" +
      d.getTime();
    setCurrentBackground("url(" + newImage + ") ");
    setBackground("url(" + newImage + ") ");
  };

  const handleUnsplashInput = (event: { target: HTMLInputElement }) => {
    setUnsplashTerm(event.target.value);
  };

  return (
    <div className="backgroundPicker">
      <div className="backpickerImages">
        <img
          className="currentBackgroundPreview"
          src={currentBackground.replace("url(", "").replace(")", "")}
          alt=""
        ></img>
        <div className="defaultBackgroundHolder">
            <img src={defaultBackground1} alt=""></img>
            <img src={defaultBackground2} alt=""></img>
            <img src={defaultBackground3} alt=""></img>
        </div>
      </div>
      <br/>
      <div className="backgroundOptions">
        <label>
          Random from Unsplash
          <input type="text" onChange={handleUnsplashInput}></input>
          <button onClick={unsplashHandler}>Search for photo</button>
        </label>

        <label>
          Upload from computer
          <input type="file" onChange={onImageChange} />
        </label>
      </div>
    </div>
  );
};

export default BackgroundPicker;
