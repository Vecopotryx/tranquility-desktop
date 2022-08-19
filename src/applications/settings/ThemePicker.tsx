import { useState } from 'react'
import styled from 'styled-components';
import darkPreview from "../../assets/img/preview-dark.svg";
import lightPreview from "../../assets/img/preview-light.svg";
import classicPreview from "../../assets/img/preview-classic.svg";

const ThemePreviews = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 1%;

  & div {
    display: inline-block;
    text-align: center;
  }
`;

const ThemeImage = styled.img`
    background-size: cover;
    background-image: url("https://source.unsplash.com/2560x1408/?water");
    border-radius: var(--borderRadius);
    width: 100%;
`


interface ThemePreviewProps {
    themeIn: string, image: string, updateTheme: (theme: string) => void, currentTheme: string | null
}

const ThemePreview = ({ themeIn, image, updateTheme, currentTheme }: ThemePreviewProps) => {
    return (
        <div onClick={() => updateTheme(themeIn.toLocaleLowerCase())}>
            <ThemeImage src={image} alt={themeIn.toLowerCase()} />
            <label>
                <input
                    type="radio"
                    checked={currentTheme === themeIn.toLocaleLowerCase()}
                    readOnly={true}
                />
                {themeIn}
            </label>
        </div>
    );
};


const ThemePicker = () => {
    const [theme, setTheme] = useState<string | null>(document.documentElement.getAttribute("data-theme") || "light");
    const updateTheme = (theme: string) => {
        setTheme(theme);
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    return (
        <ThemePreviews>
            <ThemePreview themeIn={"Light"} image={lightPreview} updateTheme={updateTheme} currentTheme={theme} />
            <ThemePreview themeIn={"Dark"} image={darkPreview} updateTheme={updateTheme} currentTheme={theme} />
            <ThemePreview themeIn={"Classic"} image={classicPreview} updateTheme={updateTheme} currentTheme={theme} />
        </ThemePreviews>
    )
}

export default ThemePicker;