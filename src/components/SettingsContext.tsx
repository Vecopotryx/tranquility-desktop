import React, { SetStateAction, Dispatch } from "react";

interface SettingsTypes {
  theme: string;
  scale: number;
  connectedMenubar: boolean;
  bottomMenubar: boolean;
  opacity: number;
  font: string;
  usingLocalStorage: boolean;
}

interface SettingsContextProps {
  customizeSettings: SettingsTypes;
  setCustomizeSettings: Dispatch<SetStateAction<SettingsTypes>>;
}

const DefaultSettings = {
  theme: "dark",
  scale: 1,
  connectedMenubar: false,
  bottomMenubar: false,
  opacity: 1,
  font: "modern",
  usingLocalStorage: false,
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