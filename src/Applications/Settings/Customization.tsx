import styles from "./Settings.module.css";
import { useState } from "react";
import { usePanelManagerStore } from "../../PanelManager/PanelManagerStore";

export const Customization = () => {
	const [theme, setTheme] = useState<string | null>(
		document.documentElement.getAttribute("data-theme") || "light",
	);

	const updateTheme = (theme: string) => {
		setTheme(theme);
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	};

	const usePanelsPreset = usePanelManagerStore(
		(state) => state.usePanelsPreset,
	);

	return (
		<div className={styles.customization}>
			<h4 style={{ display: "inline" }}>Window Themes</h4>
			<br />
			<button type="button" onClick={() => updateTheme("light")}>
				Light
			</button>
			<button type="button" onClick={() => updateTheme("dark")}>
				Dark
			</button>
			<button type="button" onClick={() => updateTheme("classic")}>
				Classic
			</button>
			<br />

			<h4 style={{ display: "inline" }}>Layout presets</h4>
			<br />
			<button type="button" onClick={() => usePanelsPreset("default")}>
				Default
			</button>
			<button type="button" onClick={() => usePanelsPreset("split")}>
				Split
			</button>
		</div>
	);
};
