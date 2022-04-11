import React, { SetStateAction, Dispatch } from "react";
import defaultBackground1 from "../assets/img/backgrounds/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg";

interface SettingsTypes {
  theme: string;
  scale: number;
  connectedMenubar: boolean;
  bottomMenubar: boolean;
  opacity: number;
  font: string;
  usingLocalStorage: boolean;
  background: string;
}

interface SettingsContextProps {
  customizeSettings: SettingsTypes;
  setCustomizeSettings: Dispatch<SetStateAction<SettingsTypes>>;
}

const hours = new Date().getHours()
const isDayTime = hours >= 8 && hours < 18

const DefaultSettings = {
  theme: isDayTime ? "light" : "dark",
  scale: 1,
  connectedMenubar: false,
  bottomMenubar: false,
  opacity: 1,
  font: "modern",
  usingLocalStorage: true,
  background: "url(" + defaultBackground1 + ")",
};

export const SettingsContext = React.createContext<SettingsContextProps>({
  customizeSettings: DefaultSettings,
} as SettingsContextProps);

export const SettingsProvider: React.FC = ({ children }) => {
  const [currentSettings, setCurrentSettings] = React.useState<SettingsTypes>(
    DefaultSettings
  );

  return (
    <SettingsContext.Provider
      value={{
        customizeSettings: currentSettings,
        setCustomizeSettings: setCurrentSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return React.useContext(SettingsContext);
};