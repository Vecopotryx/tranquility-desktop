import React from 'react'
import Notes from './Notes';
import AppWindow from "./appWindow";

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
                {windowList.map((appWindow) => (
                    <AppWindow>
                        // Currently borked. Will have to rewrite AppWindow first.
                        <h2>Test</h2>
                    </AppWindow>
                ))}
            </div>
        </>
    )
}

export default WindowManager;