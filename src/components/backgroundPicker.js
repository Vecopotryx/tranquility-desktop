import React, { useState } from "react";
import defaultBackground1 from "../img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg";
import defaultBackground2 from "../img/KDE Plasma Scenery 64 NO LOGO.jpg";
import defaultBackground3 from "../img/nasa-Q1p7bh3SHj8-unsplash.jpg";

export default function BackgroundPicker(props) {
  const [unsplashTerm, setUnsplashTerm] = useState("");
  const [currentBackground, setCurrentBackground] = useState(props.background);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let newImage = URL.createObjectURL(event.target.files[0]);
      setCurrentBackground("url(" + newImage + ") ");
      props.setBackground("url(" + newImage + ") ");
    }
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
    props.setBackground("url(" + newImage + ") ");
  };

  const handleUnsplashInput = (changeEvent) => {
    setUnsplashTerm(changeEvent.target.value);
  };

  return (
    <div className="backgroundPicker">
      <h2>Background</h2>
      <img
        className="settingsCurrentBackgroundPreview"
        src={currentBackground.replace("url(", "").replace(")", "")}
        width="100%"
        alt=""
      ></img>
      <hr width="99%" />
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
}
