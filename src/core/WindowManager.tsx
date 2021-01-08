import React from "react";
import { useWindowList } from "../contexts/WindowContext";
import AppWindow from "./AppWindow";

const WindowManager = () => {
  const windowList = useWindowList().windowList;
  const handleClose = useWindowList().handleClose;
  const handleFocus = useWindowList().handleFocus;
  const highestIndex = useWindowList().highestIndex;

  const updateFrameOverlay = (visible: boolean) => {
    setFrameOverlay({ visible: visible, index: highestIndex });
  };

  const [frameOverlay, setFrameOverlay] = React.useState({
    visible: false,
    index: 1,
  });

  return (
    <>
      <div
        style={{
          display: frameOverlay.visible ? "block" : "none",
          zIndex: frameOverlay.index,
        }}
        className="frameOverlay"
      />
      <div className="WindowContainer">
        {windowList.map((appWindow) => (
          <AppWindow
            key={appWindow.id}
            appId={appWindow.id}
            isFocused={appWindow.isFocused}
            title={appWindow.title}
            index={appWindow.index}
            updateFrameOverlay={updateFrameOverlay}
            handleClose={handleClose}
            handleFocus={handleFocus}
          >
            {appWindow.component}
          </AppWindow>
        ))}
      </div>
    </>
  );
};

export default WindowManager;
