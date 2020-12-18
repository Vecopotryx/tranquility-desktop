import React, { useState } from 'react'
import './greeter.css'

export default function Welcome(props) {

    const [currentScreen, setCurrentScreen] = useState("greeting");
 
    const Greeting = () => {
        return (
            <div>
                <h1>Welcome to Retro Desktop Environment</h1>
                <p>Configure themes and other settings by pressing the configure button</p>
                <button>Continue with default settings</button>
                <button>Configure</button>
            </div>
        );
    } 

    const CurrentScreen = () => {
        switch(currentScreen) {
            case "greeting":
                return <Greeting/>
            default:
                break;
        }
      }; 

    return (
        <div>
            <CurrentScreen/>
        </div>
    )
}
