import { Console } from "console";
import React, { SetStateAction, Dispatch, FC } from "react";
import AppWindow from "./AppWindow";
import Menubar from "./Menubar";
import ChipPlayer from "./ChipPlayer";

interface WindowListProps {
  id?: number;
  title?: string;
  component?: React.FC;
  index?: number;
  isFocused?: boolean;
}

/*
interface WindowManagerProps {
  windowList: [WindowListProps];
  setWindowList: any;
  // setWindowList: Dispatch<SetStateAction<WindowListProps>>;
}*/

const WindowManager = () => {
  const [status, setStatus] = React.useState();

  const [windowList, setWindowList] = React.useState([
    {
      id: 1,
      title: "Test",
      component: <ChipPlayer />,
      index: 1,
      isFocused: false,
    },
    {
      id: 2,
      title: "Test2",
      component: <ChipPlayer />,
      index: 3,
      isFocused: true,
    },
  ]);

  const [frameOverlay, setFrameOverlay] = React.useState({
    visible: false,
    index: 1,
  });

  const handleOpen = (title: string, component: JSX.Element) => {
    console.log(title, component);
    const newArr = [
      ...windowList,
      { id: 1, title: title, component: component, index: 1, isFocused: true },
    ];
    setWindowList(newArr);
  };

  const handleClose = (appId: number) => {
    setWindowList(windowList.filter((c) => c.id !== appId));
  };

  const updateFrameOverlay = (visible:boolean, index:number) => {
    setFrameOverlay({visible: visible, index: index})
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
            appId={appWindow.id}
            isFocused={appWindow.isFocused}
            title={appWindow.title}
            index={appWindow.index}
            updateFrameOverlay={updateFrameOverlay}
            handleClose={handleClose}
          >
            {appWindow.component}
          </AppWindow>
        ))}
      </div>
    </>
  );
};

export default WindowManager;
