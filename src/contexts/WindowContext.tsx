import React, { useEffect } from "react";
import Greeter from "../applications/Greeter";
import Logo from "../assets/img/LogoSideView.png";

interface WindowListTypes {
  id: number;
  title: string;
  component: JSX.Element;
  index: number;
  isFocused: boolean;
  appIcon: string;
}

interface WindowContextProps {
  windowList: WindowListTypes[];
  handleOpen: (title: string, component: JSX.Element, appIcon: string) => void;
  handleClose: (appId: number) => void;
  handleFocus: (appId: number) => void;
  highestIndex: number;
}

export const WindowContext = React.createContext<WindowContextProps>({
  windowList: [{}],
} as WindowContextProps);

interface WindowListProviderProps {
  children?: React.ReactNode;
}

export const WindowListProvider: React.FC<WindowListProviderProps> = ({ children }) => {
  const [windowListState, setWindowListState] = React.useState<WindowListTypes[]>([]);
  const [highestIndex, setHighestIndex] = React.useState(0);

  const [currentlyFocused, setCurrentlyFocused] = React.useState(0);

  const handleOpen = (title: string, component: JSX.Element, appIcon: string) => {
    let newId =
      Math.max(...windowListState.map((appWindow) => appWindow.id)) + 1;
    if (!isFinite(newId)) newId = 0; // Prevents newId from being -Infinity when list is empty.
    const newArr = [
      ...windowListState,
      {
        id: newId,
        title: title,
        component: React.cloneElement(component, { id: newId, handleClose: handleClose }),
        index: highestIndex + 1,
        isFocused: false,
        appIcon: appIcon,
      },
    ];
    const newWindowList = newArr.map((appWindow) => {
        if (appWindow.id !== newId) return { ...appWindow, isFocused: false };
        return { ...appWindow, index: highestIndex + 1, isFocused: true };
      });
    setWindowListState(newWindowList);
  };

  const handleClose = (appId: number) => {
    setWindowListState(windowListState.filter((c) => c.id !== appId));
  };

  const handleFocus = (appId: number) => {
    if (appId !== currentlyFocused) {
      const newWindowList = windowListState.map((appWindow) => {
        if (appWindow.id !== appId) return { ...appWindow, isFocused: false };
        return { ...appWindow, index: highestIndex + 1, isFocused: true };
      });
      setWindowListState(newWindowList);
      setHighestIndex(highestIndex + 1);
      setCurrentlyFocused(appId);
    }
  };


  useEffect(() => {
    if(localStorage.getItem("greeted") === null){
        handleOpen("Greeter", <Greeter/>, Logo);
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WindowContext.Provider
      value={{
        windowList: windowListState,
        handleOpen: handleOpen,
        handleClose: handleClose,
        handleFocus: handleFocus,
        highestIndex: highestIndex,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowList = () => {
  return React.useContext(WindowContext);
};
