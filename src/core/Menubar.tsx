import React, { useEffect, useState } from "react";
import "../assets/styles/componentStyles/Menubar.css";
import Dropdown from "./Dropdown";

// application icons:
import ChipPlayerIcon from "../assets/img/icons/ChipPlayerJS.png"
import TerminalIcon from "../assets/img/icons/terminal.png"
import NotesIcon from "../assets/img/icons/notes.png"
import SettingsIcon from "../assets/img/icons/settings.png"
import BrowserIcon from "../assets/img/icons/browser.png"
import ClockIcon from "../assets/img/icons/clock.svg"
import CalcIcon from "../assets/img/icons/calculator.svg"
import BookIcon from "../assets/img/icons/book.svg"

// application components:
import Notes from "../applications/Notes";
import Settings from "../applications/settings/Settings";
import Browser from "../applications/Browser";
import Terminal from "../applications/Terminal";
import Clock from "../applications/Clock";
import Calculator from "../applications/Calculator";
import Framed from "../applications/Framed";
import { useWindowList } from "../contexts/WindowContext";

const Menubar = () => {
  const AppButtons = [
    {
      appName: "Notes",
      appComponent: <Notes />,
      buttonText: "Notes",
      appIcon: NotesIcon,
    },
    {
      appName: "Chip Player JS",
      appComponent: <Framed src="https://mmontag.github.io/chip-player-js/browse/ModArchives" />,
      buttonText: "Chip Player",
      appIcon: ChipPlayerIcon,
    },
    {
      appName: "Getpost Gavinator",
      appComponent: <Browser />,
      buttonText: "Internet",
      appIcon: BrowserIcon,
    },
    {
      appName: "Terminal",
      appComponent: <Terminal />,
      buttonText: "Terminal",
      appIcon: TerminalIcon,
    },
    {
      appName: "Clock",
      appComponent: <Clock />,
      buttonText: "Clock",
      appIcon: ClockIcon,
    },
    {
      appName: "Calculator",
      appComponent: <Calculator />,
      buttonText: "Calculator",
      appIcon: CalcIcon,
    },
    {
      appName: "Svelte Ebook Reader",
      appComponent: <Framed src="https://vecopotryx.github.io/svelte-ebook-reader" />,
      buttonText: "Ebook Reader",
      appIcon: BookIcon,
    },
  ];
  const handleOpen = useWindowList().handleOpen;
  const handleFocus = useWindowList().handleFocus;
  const windowList = useWindowList().windowList;

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


  return (
    <div className="menubar">
      <div className="menubarLeft">
        <Dropdown text="Applications">
          <div className="menubarList">
            {AppButtons.map((appButton, index) => (
              <div key={index}>
                <button
                  className="menubarButton"
                  onClick={() =>
                    handleOpen(appButton.appName, appButton.appComponent, appButton.appIcon)
                  }
                >
                  <img src={appButton.appIcon} alt=""></img>
                  {appButton.buttonText}
                </button>
              </div>
            ))}
          </div>
        </Dropdown>

        <Dropdown text="Options">
          <div className="menubarList">
            <button
              className="menubarButton"
              onClick={() => handleOpen("Settings", <Settings />, SettingsIcon)}
            >
              Settings
            </button>
          </div>
        </Dropdown>

        <span className="openWindowList">
          {windowList.map((app, index) => (
            <img key={index} className="openWindowListIcon" src={app.appIcon} alt={app.title} onClick={() => handleFocus(app.id)}></img>
          ))}
        </span>
      </div>

      <div className="menubarRight" onClick={() => handleOpen("Clock", <Clock />, ClockIcon)}>
        <p>
          {days[time.getDay()]}{" "}
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};

export default Menubar;
