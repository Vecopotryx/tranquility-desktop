import React, { useState } from 'react'
import Customization from './customization'

export default function Settings() {
    const [openSettings, setOpenSettings] = useState("customization");

    const OpenedSettings = ( props ) => {
        switch(openSettings) {
            case "customization":
                return <Customization theme={props.theme} setTheme={props.setTheme} background={props.background} setBackground={props.setBackground}/>
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
