import { type ReactElement, useState } from "react";
import styles from "./Settings.module.css";
import { About } from "./About";
import { Customization } from "./Customization";
import icon from "../../assets/img/icons/settings.png";
import { Background } from "./Background";
import type { Application } from "../AppManagerStore";

const Settings = () => {
	const [openSettings, setOpenSettings] = useState("about");

	const OpenedSettings = (): ReactElement => {
		switch (openSettings) {
			case "about":
				return <About />;
			case "background":
				return <Background />;
			case "customization":
				return <Customization />;
			default:
				break;
		}
		return <h1>Error</h1>;
	};

	return (
		<div className={styles.settings}>
			<div className={styles.sidebar}>
				<button
					className={openSettings === "applications" ? styles.selected : ""}
					type="button"
					onClick={() => setOpenSettings("applications")}
				>
					Applications
				</button>
				<button
					className={openSettings === "customization" ? styles.selected : ""}
					type="button"
					onClick={() => setOpenSettings("customization")}
				>
					Customization
				</button>
				<button
					className={openSettings === "background" ? styles.selected : ""}
					type="button"
					onClick={() => setOpenSettings("background")}
				>
					Background
				</button>
				<button
					className={openSettings === "about" ? styles.selected : ""}
					type="button"
					onClick={() => setOpenSettings("about")}
				>
					About
				</button>
			</div>
			<div className={styles.container}>
				<OpenedSettings />
			</div>
		</div>
	);
};

export const SettingsApp: Application = {
	title: "Settings",
	icon: icon,
	type: "component",
	component: <Settings />,
};
