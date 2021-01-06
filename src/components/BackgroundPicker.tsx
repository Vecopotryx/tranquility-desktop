import React, { Dispatch, SetStateAction, useState } from "react";
import defaultBackground1 from "../img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg";
import defaultBackground2 from "../img/KDE Plasma Scenery 64 NO LOGO.jpg";
import defaultBackground3 from "../img/nasa-Q1p7bh3SHj8-unsplash.jpg";

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
  //         <hr width="99%" /> (For some reason typescript doesnt like me assigning width to a hr)
  return (
    <div className="backgroundPicker">
      <h2>Background</h2>
      <img
        className="settingsCurrentBackgroundPreview"
        src={currentBackground.replace("url(", "").replace(")", "")}
        width="100%"
        alt=""
      ></img>
      <div className="settingsPreviewsHolder">
        <img
          className="settingsBackgroundPreview"
          src={defaultBackground1}
          style={{ marginRight: "1%" }}
          width="100%"
          alt=""
        ></img>
        <img
          className="settingsBackgroundPreview"
          src={defaultBackground2}
          width="100%"
          alt=""
        ></img>
        <img
          className="settingsBackgroundPreview"
          src={defaultBackground3}
          style={{ marginLeft: "1%" }}
          width="100%"
          alt=""
        ></img>
      </div>
      <div className="settingsBackgroundOptions">
        <label>
          Random from Unsplash
          <br />
          <input type="text" onChange={handleUnsplashInput}></input>
          <button onClick={unsplashHandler}>Search for photo</button>
        </label>

        <br />
        <label>
          Upload from computer
          <br />
          <input type="file" onChange={onImageChange} />
        </label>
      </div>
    </div>
  );
};

export default BackgroundPicker;
