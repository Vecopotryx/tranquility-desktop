import { type ReactElement, useState } from "react";
import styles from "./Settings.module.css";
import Logo from "../assets/img/LogoSideView.png";
import type { Application } from "../WindowManager/WindowManagerStore";

const About = () => {
	return (
		<div className={styles.about}>
			<img src={Logo} alt="Logo" />
			<div>
				<span>Project</span>
				<span>Tranquility Desktop</span>
			</div>
		</div>
	);
};

const Settings = () => {
	const [openSettings, setOpenSettings] = useState("about");

	const OpenedSettings = (): ReactElement => {
		switch (openSettings) {
			case "about":
				return <About />;
			default:
				break;
		}
		return <h1>Error</h1>;
	};

	return (
		<div className={styles.settings}>
			<div className={styles.sidebar}>
				<button type="button" onClick={() => setOpenSettings("theme")}>
					Customization
				</button>
				<button type="button" onClick={() => setOpenSettings("background")}>
					Background
				</button>
				<button type="button" onClick={() => setOpenSettings("about")}>
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
	type: "component",
	component: <Settings />,
};
