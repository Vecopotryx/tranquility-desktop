import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Set theme before render
const theme = localStorage.getItem("theme");
if (theme) {
	document.documentElement.setAttribute("data-theme", theme);
} else {
	// Set default theme based on system preference
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	document.documentElement.setAttribute(
		"data-theme",
		prefersDark ? "dark" : "light",
	);
}
const opacity = localStorage.getItem("opacity");
if (opacity) {
	document.documentElement.style.setProperty("--background-opacity", opacity);
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
