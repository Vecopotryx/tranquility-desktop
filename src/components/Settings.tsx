import React, { ReactElement, useState } from 'react'
import Customization from './customization'
import BackgroundPicker from './backgroundPicker'
import { useSettings } from './SettingsContext'

const Settings = () => {
    const [openSettings, setOpenSettings] = useState("customization");

    const settings = useSettings().customizeSettings;
    const setSettings = useSettings().setCustomizeSettings;

    const OpenedSettings = (): ReactElement => {
        switch(openSettings) {
            case "customization":
                return <Customization settings={settings} setSettings={setSettings}/>
            case "background":
                return <BackgroundPicker settings={settings.background} setSettings={setSettings}/>
            default:
                break;
        }
        return <h1>Error</h1>
      }; 

    return (
        <div>
            <div>
                <button onClick={() => setOpenSettings("customization")}>Customization</button>
                <button onClick={() => setOpenSettings("background")}>Background</button>
            </div>
            <OpenedSettings/>
        </div>
    )
}

export default Settings;