import defaultBackground from "../assets/img/backgrounds/sylvain-mauroux-jYCUBAIUsk8-unsplash.jpg";

export const loadTheming = () => {
    const theme = localStorage.getItem("theme");
    const opacity = localStorage.getItem("opacity");
    const font = localStorage.getItem("font");
    const backgroundImg = localStorage.getItem("backgroundImg");
    if (theme) { document.documentElement.setAttribute("data-theme", theme); }
    if (opacity) { document.documentElement.style.setProperty('--bgopacity', opacity); }
    if (font) { document.documentElement.style.setProperty('--font', font === "modern" ? "" : font); }
    if (backgroundImg) {
        document.documentElement.style.setProperty('--backgroundImg', backgroundImg);
    } else {
        document.documentElement.style.setProperty('--backgroundImg', "url(" + defaultBackground + ")")
    }
}