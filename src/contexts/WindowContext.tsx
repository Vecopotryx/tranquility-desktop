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
}

export const WindowContext = React.createContext<WindowContextProps>(
  {windowList: [{}]} as WindowContextProps
);

export const WindowListProvider: React.FC = ({ children }) => {
  const [windowListState, setWindowListState] = React.useState<WindowListTypes[]>([]);

  return (
    <WindowContext.Provider
      value={{
        windowList: windowListState,
        setWindowList: setWindowListState,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowList = () => {
  return React.useContext(WindowContext);
};
