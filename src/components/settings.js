import React from 'react'

export const Settings = ({theme, toggleTheme}) => {
    return (
        <button onClick={toggleTheme}>
            <h1>Toggle</h1>
        </button>
    )
}
