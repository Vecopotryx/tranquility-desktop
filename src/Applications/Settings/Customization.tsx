import styles from "./Settings.module.css";
import { usePanelManagerStore } from "../../PanelManager/PanelManagerStore";
import { ThemePicker } from "./ThemePicker";
import { useState } from "react";

export const Customization = () => {
	const usePanelsPreset = usePanelManagerStore(
		(state) => state.usePanelsPreset,
	);

	const toggleFont = () => {
		document.body.classList.toggle("retro-font");
	};

	const [opacity, setOpacity] = useState<number | null>(
		Number(
			document.documentElement.style.getPropertyValue("--background-opacity"),
		) || 0.8,
	);

	const updateOpacity = (Opacity: number) => {
		setOpacity(Opacity);
		document.documentElement.style.setProperty(
			"--background-opacity",
			Opacity.toString(),
		);
		localStorage.setItem("opacity", Opacity.toString());
	};

	return (
		<div className={styles.customization}>
			<h4>Theme</h4>
			<ThemePicker />
			<br />
			<h4>Layout presets</h4>

			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr",
					gap: "0.5em",
				}}
			>
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
			<h4>Misc</h4>

			<button onClick={toggleFont} type="button">
				Toggle Retro Font
			</button>
			<br />
			<label>
				Opacity
				<input
					type="range"
					min="1"
					max="10"
					value={opacity ? opacity * 10 : 10}
					step="1"
					style={{ verticalAlign: "middle" }}
					onChange={(e) => updateOpacity(Number(e.target.value) / 10)}
				/>
				{opacity}
			</label>
		</div>
	);
};
