import React, { ReactNode, ReactText, useRef } from "react";
import { Rnd } from "react-rnd";
import "./appWindow.css";

interface AppWindowProps {
  children: ReactNode;
  isFocused: boolean;
  title: string;
  index: number;
}

const AppWindow = ({ children, isFocused, title, index }: AppWindowProps) => {
  const [dimensions, setDimensions] = React.useState({
    maxHeight: 20000,
    storedHeight: 300,
    storedWidth: 500,
  });

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const updateCollapse = () => {
    if (rndRef != null) {
      if (isCollapsed) {
        setDimensions({
          maxHeight: 20000,
          storedWidth: dimensions.storedWidth,
          storedHeight: dimensions.storedHeight,
        });
        rndRef.updateSize({
          width: dimensions.storedWidth,
          height: dimensions.storedHeight,
        });
      } else {
        setDimensions({
          maxHeight: 0,
          storedWidth: rndRef.getSelfElement()?.clientWidth as number,
          storedHeight: rndRef.getSelfElement()?.clientHeight as number,
        });
        rndRef.updateSize({ width: dimensions.storedWidth, height: 0 });
      }
    }

    setIsCollapsed(!isCollapsed);
  };

  let rndRef: Rnd | null;

  return (
    <>
      <Rnd
        className="appWindow"
        maxHeight={dimensions.maxHeight}
        ref={(c) => {
          rndRef = c;
        }}
        default={{
          x: (document.documentElement.clientWidth - dimensions.storedWidth)/2,
          y: (document.documentElement.clientHeight - dimensions.storedHeight)/2,
          width: dimensions.storedWidth,
          height: dimensions.storedHeight,
        }}
      >
        <div className={isFocused! ? "titlebar" : "titlebarUnfocused"}>
          <button className="closeWindow">×</button>
          <a className="appName">{title}</a>
          <button className="collapseWindow" onClick={() => updateCollapse()}>
            {isCollapsed ? "▼" : "▲"}
          </button>
        </div>
        <div
          className="appContent"
          style={{ display: isCollapsed ? "none" : "block" }}
        >
          {children}
        </div>
      </Rnd>
    </>
  );
};

export default AppWindow;
