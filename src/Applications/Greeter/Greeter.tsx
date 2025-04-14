import type { Application } from "../AppManagerStore";
import icon from "../../assets/img/LogoSideView.png";
import { useState } from "react";
import styles from "./Greeter.module.css";

const Greeter = () => {
	const [currentScreen, setCurrentScreen] = useState("greeting");

	const Greeting = () => {
		return (
			<>
				<img src={icon} style={{ width: "10%", height: "10%" }} alt="" />
				<h1>Welcome to Tranquility Desktop</h1>
				<p>
					Configure themes and other settings by pressing the button below, or
					close this window to use default settings.
				</p>
				<button
					className={styles.navbutton}
					type="button"
					onClick={() => setCurrentScreen("theme")}
				>
					&#8594;
				</button>
			</>
		);
	};
	const CurrentScreen = () => {
		switch (currentScreen) {
			case "greeting":
				return <Greeting />;

			default:
				return <h2>Not implemented</h2>;
		}
	};

	return (
		<div className={styles.greeterContainer}>
			<CurrentScreen />
		</div>
	);
};

export const GreeterApp: Application = {
	title: "Welcome!",
	icon: icon,
	type: "component",
	component: <Greeter />,
};
