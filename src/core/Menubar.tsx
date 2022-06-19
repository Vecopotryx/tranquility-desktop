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

& div {
  padding-left: 0.2%;
  padding-right: 0.2%;
  user-select: none;
}
`

const MenubarLeftRight = styled.div`
  font-size: ${p => p.theme.scale * 16}px;
  background-color: rgba(${p => p.theme.colors.background + "," + p.theme.opacity});
  color: ${p => p.theme.colors.text};
  height: ${p => p.theme.scale * 0.7}cm;
  border-radius: ${p => p.theme.borderRadius}px;
  line-height: ${p => p.theme.scale * 0.7}cm;

  transition: background-color 0.3s, color 0.3s;

  >* {
    margin-right: 1%;
  }
`
/* 
background-color: ${settings.connectedMenubar
  ? "transparent"
  : "rgba(" + theme.colors.background + "," + settings.opacity + ")"};

//backdrop-filter: ${settings.connectedMenubar
  //? "none"
  //: "blur(10px)"};
*/

const MenubarList = styled.div`
  position: absolute;
  width: ${p => p.theme.scale * 4}cm;
  background-color: ${p => "rgba(" +
    p.theme.colors.background +
    "," +
    p.theme.opacity +
    ")"};
  border-radius: ${p => p.theme.borderRadius}px;
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
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.scale * 15}px;

  > img {
    float: left;
    padding-right: 3%;
    width: ${p => p.theme.scale * 0.7}cm;

  }
`

const OpenWindowList = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${p => p.theme.scale * 0.7}cm;
`

const OpenWindowListIcon = styled.img`
  margin-left: 0.2vw;
  vertical-align: middle;
  height: ${p => p.theme.scale * 0.6}cm;

  &:hover {
    transform: scale(1.2);
    transition: transform 0.2s;
  }
`
//font-family: ${settings.font === "retro" ? "retro" : ""};

/*bottom: ${settings.bottomMenubar
? (settings.scale * 0.7) + "cm"
: null};*/

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

      <MenubarLeftRight style={{ float: "right" }} onClick={() => handleOpen("Clock", <Clock />, ClockIcon)}>
        <p>
          {days[time.getDay()]}{" "}
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </MenubarLeftRight>
    </MenubarDiv>
  );
};

export default Menubar;
