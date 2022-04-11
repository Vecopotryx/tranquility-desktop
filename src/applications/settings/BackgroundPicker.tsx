import React, { Dispatch, SetStateAction, useState } from "react";
import defaultBackground1 from "../../assets/img/backgrounds/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg";
import defaultBackground2 from "../../assets/img/backgrounds/patrick-robert-doyle-r4PxPNSIzHw-unsplash.jpg";
import defaultBackground3 from "../../assets/img/backgrounds/kyle-bushnell-wjrlOqZCvCM-unsplash.jpg";
import defaultBackground4 from "../../assets/img/backgrounds/nasa-Q1p7bh3SHj8-unsplash.jpg";

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

  const onImageChange = (event: { target: HTMLInputElement }) => {
    if (event.target.files && event.target.files[0]) {
      let newImage = URL.createObjectURL(event.target.files[0]);
      setBackground(newImage);
    }
  };

  const setBackground = (value: string) => {
    setSettings({ ...settings, background: "url(" + value + ") " });
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
    setBackground(newImage);
  };

  const handleUnsplashInput = (event: { target: HTMLInputElement }) => {
    setUnsplashTerm(event.target.value);
  };

  const DefaultBackground = ({ background }: { background: string }) => {
    return (
      <img
        src={background}
        alt=""
        onClick={() => setBackground(background)}
      ></img>
    );
  };

  return (
    <div className="backgroundPicker">
      <div className="backpickerImages">
        <img
          className="currentBackgroundPreview"
          src={settings.background.replace("url(", "").replace(")", "")}
          alt=""
        ></img>
        <div className="defaultBackgroundHolder">
          <DefaultBackground background={defaultBackground1} />
          <DefaultBackground background={defaultBackground2} />
          <DefaultBackground background={defaultBackground3} />
          <DefaultBackground background={defaultBackground4} />
        </div>
      </div>
      <br />
      <div className="backgroundOptions">
        <label>
          Random from Unsplash:
          <input
            type="text"
            onChange={handleUnsplashInput}
            onKeyUp={(e) => {
              if (e.key === "Enter") unsplashHandler();
            }}
          ></input>
          <button onClick={unsplashHandler}>Search for photo</button>
        </label>

        <label>
          Upload from computer: <input type="file" onChange={onImageChange} />
        </label>
      </div>
    </div>
  );
};

export default BackgroundPicker;
