import React from "react";
import AppWindow from "./AppWindow";
import Menubar from "./Menubar";
import Notes from "./Notes";

const WindowManager = () => {
  const [highestIndex, setHighestIndex] = React.useState(2);
  const [currentlyFocused, setCurrentlyFocused] = React.useState(2);

  const [windowList, setWindowList] = React.useState([
    {
      id: 0,
      title: "Test",
      component: <Notes />,
      index: 1,
      isFocused: false,
    },
    {
      id: 1,
      title: "Test2",
      component: <Notes />,
      index: 2,
      isFocused: true,
    },
  ]);

  const [frameOverlay, setFrameOverlay] = React.useState({
    visible: false,
    index: 1,
  });

  const handleOpen = (title: string, component: JSX.Element) => {
    let newId = Math.max(...windowList.map((appWindow) => appWindow.id)) + 1;
    if (!isFinite(newId)) newId = 0; // Prevents newId from being -Infinity when list is empty.
    const newArr = [
      ...windowList,
      {
        id: newId,
        title: title,
        component: component,
        index: highestIndex + 1,
        isFocused: true,
      },
    ];
    setHighestIndex(highestIndex + 1);
    setWindowList(newArr);
  };

  const handleClose = (appId: number) => {
    setWindowList(windowList.filter((c) => c.id !== appId));
  };

  const updateFrameOverlay = (visible: boolean, index: number) => {
    setFrameOverlay({ visible: visible, index: highestIndex });
  };

  const handleFocus = (appId: number) => {
    if (appId !== currentlyFocused) {
      const newWindowList = windowList.map((appWindow) => {
        if (appWindow.id !== appId) return { ...appWindow, isFocused: false };
        return { ...appWindow, index: highestIndex + 1, isFocused: true };
      });
      setWindowList(newWindowList);
      setHighestIndex(highestIndex + 1);
      setCurrentlyFocused(appId);
    }
  };

  return (
    <>
      <div
        style={{
          display: frameOverlay.visible ? "block" : "none",
          zIndex: frameOverlay.index,
        }}
        className="frameOverlay"
      />
      <Menubar handleOpen={handleOpen} />
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
