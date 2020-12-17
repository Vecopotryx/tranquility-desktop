import React, { useState } from 'react'
import Customization from './customization'

const Settings = (props) => {
    const [openSettings, setOpenSettings] = useState("customization");

    const OpenedSettings = () => {
        switch(openSettings) {
            case "customization":
                return <Customization background={props.background} setBackground={props.setBackground} customizeSettings={props.customizeSettings} setCustomizeSettings={props.setCustomizeSettings}/>
            default:
                break;
        }
      }; 

    return (
        <div>
            <OpenedSettings/>
        </div>
    )
}

export default Settings;