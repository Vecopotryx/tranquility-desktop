import React, { Component } from "react";
import "./menubar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import Notes from "../components/notes";
import ChipPlayer from "./chipPlayer";
import Settings from "./settings";
import appIconPlaceholder from "../img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg";

class Menubar extends Component {
  state = {
    appButtons: [
      {
        appName: "Notes",
        appComponent: <Notes />,
        buttonText: "Notes",
        defaultWidth: 200,
        defaultHeight: 200,
        appIcon: appIconPlaceholder,
      },
      {
        appName: "Chip Player JS",
        appComponent: <ChipPlayer />,
        buttonText: "Chip Player",
        defaultWidth: "50%",
        defaultHeight: 500,
        customBackground: "#010088",
        appIcon: appIconPlaceholder,
      },
    ],
    time: new Date(),
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  };

  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  render() {
    const { time } = this.state;
    return (
      <React.Fragment>
        <nav className="menubar">
          <div className="menubarLeft">
            <NavDropdown className="menubarDropdown" title="Applications">
              {this.state.appButtons.map((appButton) => (
                <NavDropdown.Item>
                  <button
                    className="menubarButton"
                    onClick={() =>
                      this.props.onOpen(
                        appButton.appName,
                        appButton.appComponent,
                        appButton.defaultWidth,
                        appButton.defaultHeight,
                        appButton.appIcon,
                        appButton.customBackground
                      )
                    }
                  >
                    <img src={appButton.appIcon} alt=""></img>
                    <a style={{ float: "left" }}>{appButton.buttonText}</a>
                  </button>
                  <NavDropdown.Divider />
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavDropdown className="menubarDropdown" title="Options">
              <NavDropdown.Item>
                <button
                  className="menubarButton"
                  onClick={() =>
                    this.props.onOpen(
                      "Settings",
                      <Settings
                        theme={this.props.theme}
                        setTheme={this.props.setTheme}
                        background={this.props.background}
                        setBackground={this.props.setBackground}
                        scale={this.props.scale}
                        setScale={this.props.setScale}
                      />,
                      300,
                      300,
                      appIconPlaceholder
                    )
                  }
                >
                  Settings
                </button>
                <NavDropdown.Divider />
              </NavDropdown.Item>
            </NavDropdown>
            <span className="openwindowListStuff">{this.props.children}</span>
          </div>
          <div className="menubarRight">
            <a>
              {this.state.days[time.getDay()]}{" "}
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Menubar;
