import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Set theme before render
const theme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", theme);
const opacity = localStorage.getItem("opacity");
if (opacity) {
	document.documentElement.style.setProperty("--background-opacity", opacity);
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
