import React from "react";
import Notes from "./Notes";
import AppWindow from "./AppWindow";

const WindowManager = () => {
  const [windowList, setWindowList] = React.useState([
    {
      id: 1,
      title: "Test",
      component: <Notes />,
      index: 1,
      isFocused: false,
    },
    {
      id: 2,
      title: "Test2",
      component: <Notes />,
      index: 2,
      isFocused: true,
    },
  ]);
  const [status, setStatus] = React.useState();

  return (
    <>
      <div className="WindowContainer">
        {windowList.map((appWindow) => (
          <AppWindow
            isFocused={appWindow.isFocused}
            title={appWindow.title}
            index={appWindow.index}
          >
            <h2>Test</h2>
          </AppWindow>
        ))}
      </div>
    </>
  );
};

export default WindowManager;
