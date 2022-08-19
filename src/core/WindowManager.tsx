import React from "react";
import styled from "styled-components";
import { useWindowList } from "../contexts/WindowContext";
import AppWindow from "./AppWindow";

const FrameOverlay = styled.div<{ $visible: boolean, index: number }>`
  height: 100%;
  width: 100%;
  background: rgba(34, 34, 34, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: ${p => p.$visible ? "block" : "none"};
`

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
      <FrameOverlay $visible={frameOverlay.visible} index={frameOverlay.index} />
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
