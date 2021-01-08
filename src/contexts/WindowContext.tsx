import React, { SetStateAction, Dispatch } from "react";

interface WindowListTypes {
  id: number;
  title: string;
  component: JSX.Element;
  index: number;
  isFocused: boolean;
}

interface WindowContextProps {
  windowList: WindowListTypes[];
  setWindowList: Dispatch<SetStateAction<WindowListTypes[]>>;
  handleOpen: (title: string, component: JSX.Element) => void;
}

export const WindowContext = React.createContext<WindowContextProps>({
  windowList: [{}],
} as WindowContextProps);

export const WindowListProvider: React.FC = ({ children }) => {
  const [windowListState, setWindowListState] = React.useState<WindowListTypes[]>([]);

  const HandleOpen = (title: string, component: JSX.Element) => {
    let newId =
      Math.max(...windowListState.map((appWindow) => appWindow.id)) + 1;
    if (!isFinite(newId)) newId = 0; // Prevents newId from being -Infinity when list is empty.
    const newArr = [
      ...windowListState,
      {
        id: newId,
        title: title,
        component: component,
        index: highestIndex + 1,
        isFocused: true,
      },
    ];
    highestIndex = highestIndex + 1;
    setWindowListState(newArr);
  };
  return (
    <WindowContext.Provider
      value={{
        windowList: windowListState,
        setWindowList: setWindowListState,
        handleOpen: HandleOpen,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowList = () => {
  return React.useContext(WindowContext);
};

// const [highestIndex, setHighestIndex] = React.useState(0);
let highestIndex = 0;
let currentlyFocused = 0;

// const [currentlyFocused, setCurrentlyFocused] = React.useState(0);

// const [windowList, setWindowList] = React.useState<WindowListProps[]>([]);

export const LogWindowList = () => {
  console.log(useWindowList().windowList);
};

/*
export const HandleOpen = (title: string, component: JSX.Element) => {
  console.log(title, component);
  console.log(useWindowList().windowList);
  
  return null;
  /*let newId = Math.max(...useWindowList().windowList.map((appWindow) => appWindow.id)) + 1;
  if (!isFinite(newId)) newId = 0; // Prevents newId from being -Infinity when list is empty.
  const newArr = [
    ...useWindowList().windowList,
    {
      id: newId,
      title: title,
      component: component,
      index: highestIndex + 1,
      isFocused: true,
    },
  ];
  highestIndex = highestIndex + 1;
  useWindowList().setWindowList(newArr);
};*/

/*
const handleClose = (appId: number) => {
  setWindowList(windowList.filter((c) => c.id !== appId));
};*/
