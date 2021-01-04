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
      index: 2,
      isFocused: true,
    },
  ]);

  const handleOpen = (title: string, component: JSX.Element) => {
    console.log(title, component);
    const newArr = [...windowList, {id: 1, title: title, component: component, index: 1, isFocused: true}]
    setWindowList(newArr);
  }

  return (
    <>
      <Menubar handleOpen={handleOpen}/>
      <div className="WindowContainer">
        {windowList.map((appWindow) => (
          <AppWindow
            isFocused={appWindow.isFocused}
            title={appWindow.title}
            index={appWindow.index}
          >
            {appWindow.component}
          </AppWindow>
        ))}
      </div>
    </>
  );
};

export default WindowManager;
