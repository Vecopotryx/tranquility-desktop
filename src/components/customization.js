import React, { useState } from "react";
import darkmodeImage from "./darkmode-temporary.svg";
import defaultBackground1 from "../img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg";
import defaultBackground2 from "../img/KDE Plasma Scenery 64 NO LOGO.jpg";
import defaultBackground3 from "../img/nasa-Q1p7bh3SHj8-unsplash.jpg";

export default function Customization(props) {
  const [unsplashTerm, setUnsplashTerm] = useState("");
  const [currentBackground, setCurrentBackground] = useState(props.background);
  const [currentTheme, setCurrentTheme] = useState(props.theme);

  // - Need to allow user to click image to select theme.
  // - Perhaps return object with other settings then parse them in the future?

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let newImage = URL.createObjectURL(event.target.files[0]);
      setCurrentBackground(newImage);
      props.setBackground("url(" + newImage + ") ");
    }
  };

  const themeHandler = (changeEvent) => {
    setCurrentTheme(changeEvent.target.value);
    props.setTheme(changeEvent.target.value);
  };

  const unsplashHandler = () => {
    let widthHeight =
      window.screen.availWidth + "x" + window.screen.availHeight;
    let d = new Date();
    let newImage =
      "https://source.unsplash.com/" +
      widthHeight +
      "/?" +
      unsplashTerm +
      "/" +
      d.getTime();
    setCurrentBackground(newImage);
    props.setBackground("url(" + newImage + ") ");
  };

  const handleUnsplashInput = (changeEvent) => {
    setUnsplashTerm(changeEvent.target.value);
  };

  return (
    <div className="customization">
      <div className="themePicker">
        <h2>Theme</h2>
        <div className="settingsPreviewsHolder">
          <div
            className="settingsPreviews"
            style={{
              backgroundImage: "url(" + currentBackground + ")",
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
            style={{ backgroundImage: "url(" + currentBackground + ")" }}
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
              backgroundImage: "url(" + currentBackground + ")",
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
              checked={currentTheme === "light"}
              onChange={themeHandler}
            />
            Light
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="dark"
              checked={currentTheme === "dark"}
              onChange={themeHandler}
            />
            Dark
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="classic"
              checked={currentTheme === "classic"}
              onChange={themeHandler}
            />
            Classic
          </label>
        </div>
      </div>
      <div className="backgroundPicker">
        <h2>Background</h2>
        <img
          className="settingsCurrentBackgroundPreview"
          src={currentBackground}
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
          <h3>Set background</h3>
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
    </div>
  );
}

/* Currently having problems getting this to work, as it for some reason doesn't want to accept these properties in the "background: " property,
so I'm keeping this down here until I get it working.

    backgroundSizeOption: "cover",
    backgroundRepeatOption: "repeat",


  backgroundSizeHandler = (changeEvent) => {
    this.setState({
      backgroundSizeOption: changeEvent.target.value,
    });
  };

  backgroundRepeatHandler = (changeEvent) => {
    this.setState({
      backgroundRepeatOption: changeEvent.target.value,
    });
  };

<div id="backgroundSize">
            <h2>Background size:</h2>
          <label>
            <input
              type="radio"
              value="cover"
              checked={this.state.backgroundSizeOption === "cover"}
              onChange={this.backgroundSizeHandler}
            />
            Cover
          </label>
          <label>
            <input
              type="radio"
              value="contain"
              checked={this.state.backgroundSizeOption === "contain"}
              onChange={this.backgroundSizeHandler}
            />
            Contain
          </label>
          <label>
            <input
              type="radio"
              value="auto"
              checked={this.state.backgroundSizeOption === "auto"}
              onChange={this.backgroundSizeHandler}
            />
            Auto
          </label>
        </div>

        <div id="backgroundRepeat">
          <h2>Background repeat:</h2>
          <label>
            <input
              type="radio"
              value="repeat"
              checked={this.state.backgroundRepeatOption === "repeat"}
              onChange={this.backgroundRepeatHandler}
            />
            Repeat
          </label>
          <label>
            <input
              type="radio"
              value="repeat-x"
              checked={this.state.backgroundRepeatOption === "repeat-x"}
              onChange={this.backgroundRepeatHandler}
            />
            Repeat-X
          </label>
          <label>
            <input
              type="radio"
              value="repeat-y"
              checked={this.state.backgroundRepeatOption === "repeat-y"}
              onChange={this.backgroundRepeatHandler}
            />
            Repeat-Y
          </label>
          <label>
            <input
              type="radio"
              value="no-repeat"
              checked={this.state.backgroundRepeatOption === "no-repeat"}
              onChange={this.backgroundRepeatHandler}
            />
            No-repeat
          </label>
        </div>
        */

/*
        Also storing this for later as, while it was working, I'm hoping to implement a better/cleaner solution
          handleBackgroundColor = (changeEvent) => {
    this.setState({
      backgroundColor: changeEvent.target.value,
    });
  }

          <label>
            <input
              type="color"
              onChange={this.handleBackgroundColor}
            />
            Background color
          </label>


  */
