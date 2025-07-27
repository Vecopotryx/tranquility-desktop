import styles from "./Settings.module.css";
import { usePanelManagerStore } from "../../PanelManager/PanelManagerStore";
import { ThemePicker } from "./ThemePicker";

export const Customization = () => {
	const usePanelsPreset = usePanelManagerStore(
		(state) => state.usePanelsPreset,
	);

	const toggleFont = () => {
		document.body.classList.toggle("retro-font");
	};

	return (
		<div className={styles.customization}>
			<h4 style={{ display: "inline" }}>Theme</h4>
			<br />
			<ThemePicker />
			<br />
			<h4 style={{ display: "inline" }}>Layout presets</h4>

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
			<button onClick={toggleFont} type="button">
				Toggle Retro Font
			</button>
		</div>
	);
};
