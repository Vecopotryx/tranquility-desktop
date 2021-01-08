import React from "react";
import { Rnd } from "react-rnd";
import "../assets/styles/componentStyles/AppWindow.css";

interface AppWindowProps {
  children: JSX.Element;
  appId: number;
  isFocused: boolean;
  title: string;
  index: number;
  updateFrameOverlay: (visible: boolean) => void;
  handleClose: (appId: number) => void;
  handleFocus: (appId: number) => void;
}

const AppWindow = ({
  children,
  appId,
  isFocused,
  title,
  index,
  updateFrameOverlay,
  handleClose,
  handleFocus,
}: AppWindowProps) => {
  const [dimensions, setDimensions] = React.useState({
    maxHeight: 20000,
    storedHeight: document.documentElement.clientHeight / 2,
  });

  // storedWidth: 500,
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [frameOverlay, setFrameOverlay] = React.useState(false);

  const updateCollapse = () => {
    if (rndRef != null) {
      if (isCollapsed) {
        setDimensions({
          maxHeight: 20000,
          // storedWidth: dimensions.storedWidth,
          storedHeight: dimensions.storedHeight,
        });
        rndRef.updateSize({
          width: rndRef.getSelfElement()?.clientWidth as number,
          height: dimensions.storedHeight,
        });
      } else {
        setDimensions({
          maxHeight: 0,
          // storedWidth: rndRef.getSelfElement()?.clientWidth as number,
          storedHeight: rndRef.getSelfElement()?.clientHeight as number,
        });
        rndRef.updateSize({
          width: rndRef.getSelfElement()?.clientWidth as number,
          height: 0,
        });
      }
    }

    setIsCollapsed(!isCollapsed);
  };

  let rndRef: Rnd | null;

  const handleResizeOrDrag = (status: boolean) => {
    setFrameOverlay(status);
    updateFrameOverlay(status);
  };

  return (
    <>
      <Rnd
        className="appWindow"
        style={{ zIndex: index }}
        maxHeight={dimensions.maxHeight}
        ref={(c) => {
          rndRef = c;
        }}
        cancel=".collapseWindow, .closeWindow, .appContent>*"
        onResizeStart={() => {
          handleResizeOrDrag(true);
        }}
        onResizeStop={() => {
          handleResizeOrDrag(false);
        }}
        onDragStart={() => {
          handleResizeOrDrag(true);
        }}
        onDragStop={() => {
          handleResizeOrDrag(false);
        }}
        default={{
          x:
            (document.documentElement.clientWidth -
              document.documentElement.clientWidth / 2) /
            2,
          y:
            (document.documentElement.clientHeight - dimensions.storedHeight) /
            2,
          width: document.documentElement.clientWidth / 2,
          height: dimensions.storedHeight,
        }}
      >
        <div className="appWrapper" onMouseEnter={() => handleFocus(appId)}>
          <div className={isFocused! ? "titlebar" : "titlebarUnfocused"}>
            <button className="closeWindow" onClick={() => handleClose(appId)}>
              ×
            </button>
            <p className="appName">{title}</p>
            <button className="collapseWindow" onClick={() => updateCollapse()}>
              {isCollapsed ? "▼" : "▲"}
            </button>
          </div>
          <div
            className="appContent"
            style={{ display: isCollapsed ? "none" : "block" }}
          >
            <div
              style={{ display: frameOverlay ? "block" : "none" }}
              className="internalFrameOverlay"
            />
            {React.cloneElement(children, { id: appId, handleClose: handleClose })}
          </div>
        </div>
      </Rnd>
    </>
  );
};

export default AppWindow;
