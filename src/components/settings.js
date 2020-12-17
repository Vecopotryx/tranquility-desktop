import React, { useState } from 'react'
import Customization from './customization'

const Settings = (props) => {
    const [openSettings, setOpenSettings] = useState("customization");

    const OpenedSettings = () => {
        switch(openSettings) {
            case "customization":
                return <Customization theme={props.theme} setTheme={props.setTheme} background={props.background} setBackground={props.setBackground} scale={props.scale} setScale={props.setScale}/>
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