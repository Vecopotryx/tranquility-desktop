import React, { ReactElement, useState } from 'react'
import Customization from './customization'
import BackgroundPicker from './backgroundPicker'

interface Props {
    background: String;
    setBackground: Function;
    customizeSettings: Object;
    setCustomizeSettings: Function;
}

const Settings = (props: Props) => {
    const [openSettings, setOpenSettings] = useState("customization");

    const OpenedSettings = (): ReactElement => {
        switch(openSettings) {
            case "customization":
                return <Customization background={props.background} customizeSettings={props.customizeSettings} setCustomizeSettings={props.setCustomizeSettings}/>
            case "background":
                return <BackgroundPicker background={props.background} setBackground={props.setBackground}/>
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