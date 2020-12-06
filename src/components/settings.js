import React, { Component } from "react";
import darkmodeImage from './darkmode-temporary.svg';


class Settings extends Component {
  state = {
    unsplashTerm: "",
  };

  onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let newImage =  URL.createObjectURL(event.target.files[0]);
      this.setState({
        image: newImage,
      });
      this.props.setBackground("url(" + newImage + ") ");
    }
  };

  componentDidMount() {
    this.setState({ image: this.props.background.replace('url(','').replace(')',''), themeOption: this.props.theme});
  }

  themeHandler = (changeEvent) => {
    this.setState({
      themeOption: changeEvent.target.value,
    });
    this.props.setTheme(changeEvent.target.value);
  };

  unsplashHandler = () => {
    let widthHeight = window.screen.availWidth + "x" + window.screen.availHeight;
    let d = new Date();
    let newImage = "https://source.unsplash.com/" + widthHeight + "/?" + this.state.unsplashTerm + "/" + d.getTime()
    this.setState({
        image: newImage,
      });
    this.props.setBackground("url(" + newImage + ") ");
  }
  
  handleUnsplashInput = (changeEvent) => {
    this.setState({
      unsplashTerm: changeEvent.target.value,
    });
  };


  // Need to prevent user from opening several settings windows.
  // Also need to allow user to click image to select theme
  // Return array with settings then parse them?
  render() {
    return (
      <React.Fragment>
        <div className="backgroundPicker">
          <h2>Background: </h2>
          <input type="text" onChange={this.handleUnsplashInput}></input>
          <button onClick={this.unsplashHandler}>Search for photo</button>
          <input
            type="file"
            onChange={this.onImageChange}
          />
        </div>

        <div className="themePicker">
            <h2>Theme:</h2>
            <div className="settingsPreviewsHolder">
              <div className="settingsPreviews" style={{backgroundImage: "url(" + this.state.image + ")"}}>
                <img className="settingsThemePreview" src={darkmodeImage} width="100%" alt=""></img>
              </div>
              <div className="settingsPreviews" style={{backgroundImage: "url(" + this.state.image + ")"}}>
                <img className="settingsThemePreview" src={darkmodeImage} width="100%" alt=""></img>
              </div>
              <div className="settingsPreviews" style={{backgroundImage: "url(" + this.state.image + ")"}}>
                <img className="settingsThemePreview" src={darkmodeImage} width="100%" alt=""></img>
              </div>
            </div>

          <div className="settingsThemeRadiosHolder">
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="light"
              checked={this.state.themeOption === "light"}
              onChange={this.themeHandler}
            />
            Light
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="dark"
              checked={this.state.themeOption === "dark"}
              onChange={this.themeHandler}
            />
            Dark
          </label>
          <label className="settingsThemeRadios">
            <input
              type="radio"
              value="classic"
              checked={this.state.themeOption === "classic"}
              onChange={this.themeHandler}
            />
            Classic
          </label>
          </div>


        </div>
      </React.Fragment>
    );
  }
}

export default Settings;



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