import styles from "./Settings.module.css";
import { useState } from "react";
import { usePanelManagerStore } from "../../PanelManager/PanelManagerStore";

export const Customization = () => {
	const [_, setTheme] = useState<string | null>(
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

	const toggleFont = () => {
		document.body.classList.toggle("retro-font");
	};

	return (
		<div className={styles.customization}>
			<h4 style={{ display: "inline" }}>Window Themes</h4>
			<br />
			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
				<button type="button" onClick={() => updateTheme("light")}>
					Light
				</button>
				<button type="button" onClick={() => updateTheme("dark")}>
					Dark
				</button>
				<button type="button" onClick={() => updateTheme("classic")}>
					Classic
				</button>
			</div>
			<br />
			<h4 style={{ display: "inline" }}>Layout presets</h4>

			<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
				<button type="button" onClick={() => usePanelsPreset("default")}>
					Default
				</button>
				<button type="button" onClick={() => usePanelsPreset("split")}>
					Split
				</button>
				<button type="button" onClick={() => usePanelsPreset("rde")}>
					Retro Desktop Environment
				</button>
			</div>
			<br />
			<button onClick={toggleFont} type="button">
				Toggle Retro Font
			</button>
		</div>
	);
};
