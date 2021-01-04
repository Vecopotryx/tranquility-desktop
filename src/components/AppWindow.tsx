import React, { ReactNode } from "react";
import { Rnd } from "react-rnd";
import "./appWindow.css"

interface AppWindowProps {
  children: ReactNode;
  isFocused: boolean;
  title: string;
}

const AppWindow = ({ children, isFocused, title }: AppWindowProps) => {
  const [windowInfo, setWindowInfo] = React.useState({
    appContentCollapsed: false,
  });

  return (
    <>
      <Rnd className="appWindow">
        <div className={isFocused! ? "titlebar" : "titlebarUnfocused"}>
          <button className="closeWindow">×</button>
          <a className="appName">{title}</a>
          <button className="collapseWindow">
            {windowInfo.appContentCollapsed ? "▼" : "▲"}
          </button>
        </div>
        <div className="appContent">{children}</div>
      </Rnd>
    </>
  );
};

export default AppWindow;
