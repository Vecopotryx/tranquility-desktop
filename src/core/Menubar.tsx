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
  width: calc(100% - 0.6em);
  margin: 0;
  position: absolute;
  display: grid;
  grid-template-columns: auto auto 1fr  auto;
  column-gap: 0.3em;
  padding: 0 0.3em;
  line-height: 0.6cm;
  height: 0.7cm;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--primary-bg), var(--bgopacity));
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
  cursor: pointer;
  padding: 0.3em;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  color: var(--primary-color);
  font-size: 0.9em;
  text-align: left;
  :hover {
    border-radius: var(--borderRadius);
    background-color: rgba(128,128,128,0.5);
  }

  > img {
    display: block;
    margin-left: auto;
    height: 0.7cm;
    width: 0.7cm;
    object-fit: contain;
    padding-right: 0.5em;
  }
`

const OpenWindowList = styled.span`
  display: flex;
  justify-content: left;
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
        <br />
        <h3 style={{ display: "inline" }}>{days[time.getDay()]}{" "}</h3>
        <br />
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

      <InlineClock />
    </MenubarDiv>
  );
};

export default Menubar;
