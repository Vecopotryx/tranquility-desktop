import React, { useEffect, useState } from "react";
import "../assets/styles/componentStyles/Menubar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import appIconPlaceholder from "../assets/img/backgrounds/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg";

// application components:
import Notes from "../applications/Notes";
import ChipPlayer from "../applications/ChipPlayer";
import Settings from "../applications/settings/Settings";
import Browser from "../applications/Browser";
import Terminal from "../applications/Terminal";

type MenubarProps = {
  handleOpen: (title: string, component: JSX.Element) => void;
};

const Menubar = ({ handleOpen }: MenubarProps) => {
  const AppButtons = [
    {
      appName: "Notes",
      appComponent: <Notes />,
      buttonText: "Notes",
      appIcon: appIconPlaceholder,
    },
    {
      appName: "Chip Player JS",
      appComponent: <ChipPlayer />,
      buttonText: "Chip Player",
      appIcon: appIconPlaceholder,
    },
    {
      appName: "Getpost Gavinator",
      appComponent: <Browser />,
      buttonText: "Internet",
      appIcon: appIconPlaceholder,
    },
    {
      appName: "Terminal",
      appComponent: <Terminal />,
      buttonText: "Terminal",
      appIcon: appIconPlaceholder,
    },
  ];

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  /*
                          appButton.defaultWidth,
                        appButton.defaultHeight,
                        appButton.appIcon,
                        appButton.customBackground*/
  return (
    <>
      <nav className="menubar">
        <div className="menubarLeft">
          <NavDropdown
            id="applications"
            className="menubarDropdown"
            title="Applications"
          >
            <div className="menubarList">
              {AppButtons.map((appButton) => (
                <NavDropdown.Item>
                  <button
                    className="menubarButton"
                    onClick={() =>
                      handleOpen(appButton.appName, appButton.appComponent)
                    }
                  >
                    <img src={appButton.appIcon} alt=""></img>
                    {appButton.buttonText}
                  </button>
                  <NavDropdown.Divider />
                </NavDropdown.Item>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown id="options" className="menubarDropdown" title="Options">
            <div className="menubarList">
              <NavDropdown.Item>
                <button
                  className="menubarButton"
                  onClick={() => handleOpen("Settings", <Settings />)}
                >
                  Settings
                </button>
                <NavDropdown.Divider />
              </NavDropdown.Item>
            </div>
          </NavDropdown>
        </div>
        <div className="menubarRight">
          <p>
            {days[time.getDay()]}{" "}
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </nav>
    </>
  );
};

//           <span className="openwindowListStuff">{this.props.children}</span>

export default Menubar;
