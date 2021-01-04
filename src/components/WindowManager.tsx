import React from 'react'
import Notes from './Notes';
import AppWindow from "./AppWindow";

const WindowManager = () => {
    const [windowList, setWindowList] = React.useState(
        [
            {
                id: 1,
                title: "Test",
                component: <Notes/>,
                index: 1,
            }
        ]
    );
    const [status, setStatus] = React.useState();

    return (
        <>
            <div className="WindowContainer">
                <AppWindow isFocused={true} title="Test" >
                    <h2>Test</h2>
                </AppWindow>
            </div>
        </>
    )
}

export default WindowManager;

                /*
                {windowList.map((appWindow) => (
                    <AppWindow>
                        <h2>Test</h2>
                    </AppWindow>
                ))}*/