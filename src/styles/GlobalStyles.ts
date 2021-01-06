import { createGlobalStyle, css } from 'styled-components';
import perfectDOS from './Perfect_DOS_VGA_437_Win.ttf'; 

interface SettingsTypes {
    theme: string;
    scale: number;
    connectedMenubar: boolean;
    bottomMenubar: boolean;
    opacity: number;
    font: string;
    usingLocalStorage: boolean;
    background: string;
  }

interface Props {
    settings: SettingsTypes;
 }

export const GlobalStyles = createGlobalStyle(
    ({settings}: Props) => css`
    @font-face {
        font-family: "retro";
        src: local("perfect-dos"),
        url(${perfectDOS}) format("truetype");
    ;}

    body {
        background-image: ${settings.background};
        background-size: 105%;
        min-height: 100%;
        color: ${({theme}) => theme.text};
        font-family: ${settings.font === "retro" ?  "retro" : "" };
    }
    .titlebar, .titlebarUnfocused {
        width: 100%;
        height: ${settings.scale * 0.7}cm;
        color: ${({theme}) => theme.titlebarTextColor};
        background: ${({theme}) => theme.titlebarBackground};
        text-align: ${({theme}) => theme.titlebarTextAlignment};
        user-select: none;
        transition: background 0.2s;
    }
    .titlebar > button {
        color: ${({theme}) => theme.titlebarTextColor};
        line-height: ${settings.scale * 0.7}cm;
        font-size: ${settings.scale * 15}px;
    }
    .titlebar > a, .titlebarUnfocused > a {
        font-size: ${settings.scale * 15}px;
        line-height: ${settings.scale * 0.7}cm;
        padding-right: 10px;
        padding-left: 10px;
    }
    .titlebarUnfocused {
        color: ${({theme}) => theme.unfocusedText};
        background: ${({theme}) => theme.unfocusedTitlebarBackground};
    }

    .titlebarUnfocused > button {
        font-size: ${settings.scale * 15}px;
        line-height: ${settings.scale * 0.7}cm;
        color: ${({theme}) => theme.unfocusedText};
    }

    .collapseWindow {
        float: ${({theme}) => theme.collapseWindowPosition};;
        color: ${({theme}) => theme.text};
    }

    .collapseWindow:hover, .closeWindow:hover {
        transform: scale(1.3);
        transition: transform 0.2s;
    }
    
    .closeWindow {
        float: ${({theme}) => theme.closeWindowPosition};;
        color: ${({theme}) => theme.text};
    }
    
    .appWindow {
        border-radius: ${({theme}) => theme.borderRadius};
        border: ${({theme}) => theme.border};
        background-color: ${({theme}) => theme.background};
        background-color: rgba(${({theme}) => theme.background},${settings.opacity});
    }

    .appWindow, .appContent {
        min-height: ${settings.scale * 0.7}cm;
        min-width: ${settings.scale * 4}cm;
    }

    .appContent > * {
        cursor: default;
    }

    .appContent {
        height: calc(100% - ${settings.scale * 0.7}cm);
      }

      .menubar {
        width: calc(100% - 16px);
        margin: 8px;
        position: absolute;
        height: ${settings.scale * 0.7}cm;
        background-color: ${settings.connectedMenubar ?  ({theme}) => "rgba("+theme.background + "," + settings.opacity + ")" : "transparent" };
        border-radius: ${({theme}) => theme.borderRadius};
        bottom: ${settings.bottomMenubar ?  "0" : "" };
    }


.menubarLeft, .menubarRight {
    font-size: ${settings.scale * 16}px;
    background-color: ${settings.connectedMenubar ? "transparent" : ({theme}) => "rgba("+theme.background + "," + settings.opacity + ")" };
    color: ${({theme}) => theme.text};
    height: ${settings.scale * 0.7}cm;
    border-radius: ${({theme}) => theme.borderRadius};
    line-height: ${settings.scale * 0.7}cm;
    padding-left: 0.2%;
    padding-right: 0.2%;
}

.menubarDropdown {
    float: left;

}

.menubarList {
    display: inline-block;
    width: ${settings.scale * 4}cm;
    background-color: ${({theme}) => "rgba("+theme.background + "," + settings.opacity + ")"};
    border-radius: ${({theme}) => theme.borderRadius};
}

.menubarDropdown > * {
    padding-right: ${settings.scale * 5}px;
    user-select: none;
    text-decoration: none;
    color: ${({theme}) => theme.text};
}

.menubarButton {
    width: 100%;
    background: none;
	border: none;
    padding: 3%;
	cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    float: right;
    font-size: ${settings.scale * 15}px;
    font-family: ${settings.font === "retro" ?  "retro" : "" };
    color: ${({theme}) => theme.text};
}

.menubarButton > img {
    float: left;
    width: ${settings.scale * 0.7}cm;
    padding-right: 3%;
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

.customization, .backgroundPicker {
    padding: 3%;
}

.settingsBackgroundOptions > label > button, .settingsBackgroundOptions > label > input {
    width: 35%;
    margin-left: 5%;
    height: 0.8cm;
}

.openWindowList {
    color: ${({theme}) => theme.text};
    height: ${settings.scale * 0.7}cm;
    display: flex;
    justify-content: center;
    align-items: center;
    float: right;
}

.openWindowList > img {
    height: ${settings.scale * 0.6}cm;
}
`);


export const lightTheme = {
    background: '255, 255, 255',
    text: '#121212',
    unfocusedText: 'gray',
    titlebarTextColor: '#121212',
    titlebarBackground: 'linear-gradient(to right, white, lightgray)',
    unfocusedTitlebarBackground: 'linear-gradient(to right, white, lightgray)',
    collapseWindowPosition: "right",
    closeWindowPosition: "left",
    titlebarTextAlignment: "center",
    borderRadius: '5px'
};


export const darkTheme = {
    background: '9, 10, 12',
    text: '#fff',
    unfocusedText: 'darkgray',
    titlebarTextColor: '#fff',
    titlebarBackground: 'linear-gradient(to right, #090a0c, gray)',
    unfocusedTitlebarBackground: 'linear-gradient(to right, #090a0c, gray)',
    collapseWindowPosition: "right",
    closeWindowPosition: "left",
    titlebarTextAlignment: "center",
    borderRadius: '5px'
};

export const classicTheme = {
    background: '169, 169, 169',
    text: '#121212',
    unfocusedText: 'gray',
    titlebarTextColor: '#fff',
    titlebarBackground: '#00008B',
    unfocusedTitlebarBackground: '#606060',
    collapseWindowPosition: "right",
    closeWindowPosition: "right",
    titlebarTextAlignment: "left",
    borderRadius: '0px',
    border: '2px outset lightgray'
};