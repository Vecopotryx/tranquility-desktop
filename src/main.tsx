import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Set theme before render
const theme = localStorage.getItem("theme") || "light";
document.documentElement.setAttribute("data-theme", theme);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
