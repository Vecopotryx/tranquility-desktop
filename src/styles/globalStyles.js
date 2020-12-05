import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: url("https://raw.githubusercontent.com/Vecopotryx/retro-desktop-environment/master/source/img/nasa-Q1p7bh3SHj8-unsplash.jpg");
    }
    .titlebar {
        width: 100%;
        height: 0.7cm;
        color: ${({theme}) => theme.text};
        background: ${({theme}) => theme.titlebarBackground};
        text-align: center;
        user-select: none;
    }
    .collapseWindow, .menubarRight {
        float: right;
    }
    
    .closeWindow, .menubarLeft {
        float: left;
    }
    

    .appWindow {
        background-color: ${({theme}) => theme.background};
    }

.menubarLeft, .menubarRight {
    margin: 0.1cm;
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
`;


export const lightTheme = {
    background: '#fff',
    text: '#121212',
    titlebarBackground: 'linear-gradient(to right, white, lightgray)',
    borderRadius: '5px'
};


export const darkTheme = {
    background: '#090a0c',
    text: '#fff',
    titlebarBackground: 'linear-gradient(to right, #090a0c, gray)',
    borderRadius: '5px'
};