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
        document.documentElement.style.setProperty('--backgroundImg', "url(https://images.unsplash.com/photo-1589642314445-999ac13b0075?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb)")
    }
}