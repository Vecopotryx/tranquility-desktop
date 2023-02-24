import React from "react";

// AppIcons:
import BrowserIcon from "../assets/img/icons/browser.png"
import ClockIcon from "../assets/img/icons/clock.svg"
import CalcIcon from "../assets/img/icons/calculator.svg"
import BookIcon from "../assets/img/icons/book.svg"
import ChipPlayerIcon from "../assets/img/icons/ChipPlayerJS.png"
import TerminalIcon from "../assets/img/icons/terminal.png"
import NotesIcon from "../assets/img/icons/notes.png"


// App components:
import Notes from "../applications/Notes";
import Browser from "../applications/Browser";
import Terminal from "../applications/Terminal";
import Clock from "../applications/Clock";
import Calculator from "../applications/Calculator";
import Framed from "../applications/Framed";

interface AppListTypes {
  id: number;
  name: string;
  component: JSX.Element;
  buttonText: string;
  appIcon: string;
}

interface AppContextProps {
  appList: AppListTypes[];
}

export const AppListContext = React.createContext<AppContextProps>({
  appList: [{}],
} as AppContextProps);

interface WindowListProviderProps {
  children?: React.ReactNode;
}

export const AppContextProvider: React.FC<WindowListProviderProps> = ({ children }) => {
  const AppButtons = [
    {
      id: 1,
      name: "Notes",
      component: <Notes />,
      buttonText: "Notes",
      appIcon: NotesIcon,
    },
    {
      id: 2,
      name: "Chip Player JS",
      component: <Framed src="https://mmontag.github.io/chip-player-js/browse/ModArchives" />,
      buttonText: "Chip Player",
      appIcon: ChipPlayerIcon,
    },
    {
      id: 3,
      name: "Getpost Gavinator",
      component: <Browser />,
      buttonText: "Internet",
      appIcon: BrowserIcon,
    },
    {
      id: 4,
      name: "Terminal",
      component: <Terminal />,
      buttonText: "Terminal",
      appIcon: TerminalIcon,
    },
    {
      id: 5,
      name: "Clock",
      component: <Clock />,
      buttonText: "Clock",
      appIcon: ClockIcon,
    },
    {
      id: 6,
      name: "Calculator",
      component: <Calculator />,
      buttonText: "Calculator",
      appIcon: CalcIcon,
    },
    {
      id: 7,
      name: "Essence Reader",
      component: <Framed src="https://vecopotryx.github.io/essence-reader" />,
      buttonText: "Ebook Reader",
      appIcon: BookIcon,
    },
    // {
    //     id: 8,
    //     name: "Retro Desktop Environment",
    //     component: <Framed src="https://vecopotryx.github.io/retro-desktop-environment" />,
    //     buttonText: "Retro Desktop Environment",
    //     appIcon: BookIcon,
    //   },
  ];

  const [appListState, setAppListState] = React.useState<AppListTypes[]>(AppButtons);

  return (
    <AppListContext.Provider
      value={{
        appList: appListState,
      }}
    >
      {children}
    </AppListContext.Provider>
  );
};

export const useAppList = () => {
  return React.useContext(AppListContext);
};
