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

const Customization = () => {
	const [theme, setTheme] = useState<string | null>(
		document.documentElement.getAttribute("data-theme") || "light",
	);

	const updateTheme = (theme: string) => {
		setTheme(theme);
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	};

	return (
		<div className={styles.customization}>
			<h4 style={{ display: "inline" }}>Presets</h4>
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
		</div>
	);
};

const Settings = () => {
	const [openSettings, setOpenSettings] = useState("about");

	const OpenedSettings = (): ReactElement => {
		switch (openSettings) {
			case "about":
				return <About />;
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
	type: "component",
	component: <Settings />,
};
