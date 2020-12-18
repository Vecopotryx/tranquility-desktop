import React, { useState } from 'react'
import Customization from './customization'
import BackgroundPicker from './backgroundPicker'

const Settings = (props) => {
    const [openSettings, setOpenSettings] = useState("customization");

    const OpenedSettings = () => {
        switch(openSettings) {
            case "customization":
                return <Customization background={props.background} customizeSettings={props.customizeSettings} setCustomizeSettings={props.setCustomizeSettings}/>
            case "background":
                return <BackgroundPicker background={props.background} setBackground={props.setBackground}/>
            default:
                break;
        }
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