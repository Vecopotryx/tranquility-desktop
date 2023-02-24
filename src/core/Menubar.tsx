import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import styled from "styled-components";
import SettingsIcon from "../assets/img/icons/settings.png";
import { useWindowList } from "../contexts/WindowContext";
import { useAppList } from "../contexts/AppContext";
import Settings from "../applications/settings/Settings";

const MenubarDiv = styled.div`
  width: calc(100% - 0.6em);
  margin: 0;
  position: absolute;
  display: grid;
  grid-template-columns: auto auto 1fr  auto;
  column-gap: 0.3em;
  padding: 0 0.3em;
  line-height: 0.9cm;
  height: 0.9cm;
  backdrop-filter: blur(10px);
  background-color: rgba(var(--primary-bg), var(--bgopacity));
  user-select: none;
`

const MenubarList = styled.div`
  position: absolute;
  width: 4cm;
  top: 1cm;
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
  height: 1cm;
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
  height: 0.9cm;
  overflow-x: scroll;
  border-left: 1px solid gray;
  border-right: 1px solid gray;

`

const WindowListItemDiv = styled.div<{ isFocused: boolean }>`
  margin-left: 0.1cm;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 0.4em;
  background-color: ${p => p.isFocused ? "rgba(var(--contrast-color),0.1)" : ""};

  &:hover {
    background-color: rgba(128,128,128,0.5);
  }

  > img {
    vertical-align: text-top;
    height: 0.5cm;
    width: 0.5cm;
    object-fit: contain;
  }
`

interface WindowListItemProps {
  title: string;
  isFocused: boolean;
  appIcon: string;
  onClick: () => void;
}

const WindowListItem = ({ title, appIcon, isFocused, onClick }: WindowListItemProps) => {
  return (
    <WindowListItemDiv onClick={onClick} isFocused={isFocused}>
      <img src={appIcon} alt={title} />
      {title}
    </WindowListItemDiv>
  )
}

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
    <Dropdown text={months[time.getMonth()] + " " + time.getDate() + " " +
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
  const AppButtons = useAppList().appList;
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
                  handleOpen(appButton.name, appButton.component, appButton.appIcon)
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
        {windowList.map((app) =>
          <WindowListItem key={app.id} title={app.title} isFocused={app.isFocused} appIcon={app.appIcon} onClick={() => handleFocus(app.id)} />
        )}
      </OpenWindowList>

      <InlineClock />
    </MenubarDiv>
  );
};

export default Menubar;
