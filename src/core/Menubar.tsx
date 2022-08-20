import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";

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

const MenubarDiv = styled.div`
  width: calc(100% - 16px);
  margin: 8px;
  position: absolute;
`

const MenubarLeftRight = styled.div`
  font-size: 16px;
  background-color: rgba(var(--primary-bg), var(--bgopacity));
  color: var(--primary-color);
  height: 0.7cm;
  border-radius: var(--borderRadius);
  line-height: 0.7cm;
  display: flex;
  flex-wrap: nowrap;
  gap: 0.2em;
  transition: background-color 0.3s, color 0.3s;
  backdrop-filter: blur(10px);
  padding-left: 0.2%;
  padding-right: 0.2%;
  user-select: none;
`

const MenubarList = styled.div`
  position: absolute;
  width: 4cm;
  background-color: rgba(var(--primary-bg), var(--bgopacity));
  border-radius: var(--borderRadius);
  backdrop-filter: blur(10px);
`

const MenubarButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  padding: 3%;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  float: right;
  outline: none;
  color: var(--primary-color);
  font-size: 15px;

  > img {
    float: left;
    padding-right: 3%;
    width: 0.7cm;
  }
`

const OpenWindowList = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 0.7cm;
`

const OpenWindowListIcon = styled.img`
  margin-left: 0.2vw;
  vertical-align: middle;
  height: 0.6cm;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
`

const InlineClock = () => {
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

  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <Dropdown text={days[time.getDay()] + " " +
      time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}>
      <MenubarList>
        <h2 style={{ display: "inline" }}>{time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}</h2>
        <hr style={{border: "1px solid var(--primary-color)"}}></hr>
        <h3 style={{ display: "inline" }}>{days[time.getDay()]}{" "}</h3>
        <br/>
        <p>
          {months[time.getMonth()]}{" "}
          {time.getDate()}{" "}
          {time.getFullYear()}
        </p>
      </MenubarList>
    </Dropdown>
  )
}

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
      appName: "Essence Reader",
      appComponent: <Framed src="https://vecopotryx.github.io/essence-reader" />,
      buttonText: "Ebook Reader",
      appIcon: BookIcon,
    },
  ];
  const handleOpen = useWindowList().handleOpen;
  const handleFocus = useWindowList().handleFocus;
  const windowList = useWindowList().windowList;

  return (
    <MenubarDiv>
      <MenubarLeftRight style={{ float: "left" }}>
        <Dropdown text="Applications">
          <MenubarList>
            {AppButtons.map((appButton, index) => (
              <div key={index}>
                <MenubarButton
                  onClick={() =>
                    handleOpen(appButton.appName, appButton.appComponent, appButton.appIcon)
                  }
                >
                  <img src={appButton.appIcon} alt=""></img>
                  {appButton.buttonText}
                </MenubarButton>
              </div>
            ))}
          </MenubarList>
        </Dropdown>

        <Dropdown text="Options">
          <MenubarList>
            <MenubarButton onClick={() => handleOpen("Settings", <Settings />, SettingsIcon)} >
              Settings
            </MenubarButton>
          </MenubarList>
        </Dropdown>

        <OpenWindowList>
          {windowList.map((app, index) => (
            <OpenWindowListIcon key={index} src={app.appIcon} alt={app.title} onClick={() => handleFocus(app.id)} />
          ))}
        </OpenWindowList>
      </MenubarLeftRight>

      <MenubarLeftRight style={{ float: "right" }} >
        <InlineClock />
      </MenubarLeftRight>
    </MenubarDiv>
  );
};

export default Menubar;
