import React, { Component } from "react";
import Notes from "../components/notes";
import "./menubar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';

class Menubar extends Component {
  state = {
    appButtons: [
      {
        appName: "Notes",
        appComponent: <Notes />,
        buttonText: "Notes",
      },
      {
        appName: "Notes 2",
        appComponent: <Notes />,
        buttonText: "Notes 2",
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
        <nav>
          <div className="menubarLeft">
            <NavDropdown className="menubarDropdown" title="Apps">
              {this.state.appButtons.map((appButton) => (
                <NavDropdown.Item>
                  <button
                    className="menubarButton"
                    onClick={() =>
                      this.props.onOpen(
                        appButton.appName,
                        appButton.appComponent
                      )
                    }
                  >
                    {appButton.buttonText}
                  </button>
                  <NavDropdown.Divider />
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavDropdown className="menubarDropdown" title="Options">
                <NavDropdown.Item>
                  <button className="menubarButton">Settings</button>
                  <NavDropdown.Divider />
                </NavDropdown.Item>
            </NavDropdown>
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
