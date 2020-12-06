import { createGlobalStyle } from 'styled-components';

//         background: url("https://raw.githubusercontent.com/Vecopotryx/retro-desktop-environment/master/source/img/andreas-gucklhorn-IRq79QU9ZGU-unsplash.jpg");



/* for bottom menubar:
    .menubar {
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    */
export const GlobalStyles = createGlobalStyle`
    body {
        background: ${(props) => props.background};
        background-size: cover;
        color: ${({theme}) => theme.text};
    }
    .titlebar, .titlebarUnfocused {
        width: 100%;
        height: 0.7cm;
        color: ${({theme}) => theme.text};
        background: ${({theme}) => theme.titlebarBackground};
        text-align: ${({theme}) => theme.titlebarTextAlignment};
        user-select: none;
        transition: background 0.2s;
    }
    .titlebar > a, .titlebarUnfocused > a {
        padding-right: 10px;
        padding-left: 10px;
    }
    .titlebarUnfocused {
        color: ${({theme}) => theme.unfocusedText};
        background: ${({theme}) => theme.unfocusedTitlebarBackground};
    }

    .collapseWindow {
        float: ${({theme}) => theme.collapseWindowPosition};;
        color: ${({theme}) => theme.text};
    }
    
    .closeWindow {
        float: ${({theme}) => theme.closeWindowPosition};;
        color: ${({theme}) => theme.text};
    }
    
    .appWindow {
        border-radius: ${({theme}) => theme.borderRadius};
        border: ${({theme}) => theme.border};
    }

    .appWindow, .appContent {
        background-color: ${({theme}) => theme.background};
    }

    .appContent > * {
        cursor: default;
    }



.menubarLeft, .menubarRight {
    margin: 8px;
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme.text};
    height: 0.7cm;
    border-radius: ${({theme}) => theme.borderRadius};
}

.menubarDropdown {
    float: left;
    user-select: none;
    text-decoration: none;
}

.menubarDropdown > * {
    background-color: ${({theme}) => theme.background};
    width: 4cm;
    border-radius: ${({theme}) => theme.borderRadius};
    padding-right: 5px;
    padding-left: 5px;
    font-size: 100%;
}

.menubarButton {
    width: 100%;
    background: none;
	border: none;
	padding-right: 2px;
	cursor: pointer;
    font-size: 20px;
    color: ${({theme}) => theme.text};
}

.settingsPreviews {
    background-size: cover;
    border-radius: ${({theme}) => theme.borderRadius};
    width: 33%;
    height: 10;
}

.settingsThemeRadios {
    text-align: center;
    display: inline-block;
    width: 33%;
}

.settingsThemeRadiosHolder, .settingsPreviewsHolder {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.settingsBackgroundPreview {
    height: 10vh;
    object-fit: cover;
    background-size: cover;
    border-radius: ${({theme}) => theme.borderRadius};
    width: 32.5%;
    height: 4cm;
    margin-bottom: 1%;
}

.backgroundPicker, .themePicker {
    text-align: center;
}

.settingsCurrentBackgroundPreview {
    border-radius: ${({theme}) => theme.borderRadius};
    width: 100%;
}

.settings {
    padding: 3%;
}

.settingsBackgroundOptions > label > button, .settingsBackgroundOptions > label > input {
    width: 35%;
    margin-left: 5%;
    height: 0.8cm;
}
`;


export const lightTheme = {
    background: '#fff',
    text: '#121212',
    unfocusedText: 'gray',
    titlebarBackground: 'linear-gradient(to right, white, lightgray)',
    unfocusedTitlebarBackground: 'linear-gradient(to right, white, lightgray)',
    collapseWindowPosition: "right",
    closeWindowPosition: "left",
    titlebarTextAlignment: "center",
    borderRadius: '5px'
};


export const darkTheme = {
    background: '#090a0c',
    text: '#fff',
    unfocusedText: 'gray',
    titlebarBackground: 'linear-gradient(to right, #090a0c, gray)',
    unfocusedTitlebarBackground: 'linear-gradient(to right, #090a0c, gray)',
    collapseWindowPosition: "right",
    closeWindowPosition: "left",
    titlebarTextAlignment: "center",
    borderRadius: '5px'
};

export const classicTheme = {
    background: '#A9A9A9',
    text: '#fff',
    unfocusedText: 'gray',
    titlebarBackground: '#00008B',
    unfocusedTitlebarBackground: '#A9A9A9',
    collapseWindowPosition: "right",
    closeWindowPosition: "right",
    titlebarTextAlignment: "left",
    borderRadius: '0px',
    border: '2px outset lightgray'
};