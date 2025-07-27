import type { Application } from "../AppManagerStore";
import icon from "../../assets/img/LogoSideView.png";
import { useContext, useState } from "react";
import styles from "./Greeter.module.css";
import { ThemePicker } from "../Settings/ThemePicker";
import { AppWindowInfoContext } from "../../WindowManager/AppWindow";
import { useWindowManagerStore } from "../../WindowManager/WindowManagerStore";

const GreetingScreen = ({ onNext }: { onNext: () => void }) => {
	return (
		<>
			<img src={icon} style={{ width: "10%", height: "10%" }} alt="" />
			<h1>Welcome to Tranquility Desktop</h1>
			<p>
				Configure themes and other settings by pressing the button below, or
				close this window to use default settings.
			</p>
			<button className={styles.startButton} type="button" onClick={onNext}>
				&#8594;
			</button>
		</>
	);
};

const ThemeScreen = ({
	onPrev,
	onNext,
}: { onPrev: () => void; onNext: () => void }) => {
	return (
		<>
			<h2>Lets choose a theme</h2>
			<ThemePicker />
			<button className={styles.prevButton} type="button" onClick={onPrev}>
				&#8592;
			</button>
			<button className={styles.nextButton} type="button" onClick={onNext}>
				&#8594;
			</button>
		</>
	);
};

const DoneScreen = ({
	onPrev,
	onNext,
}: { onPrev: () => void; onNext: () => void }) => {
	return (
		<>
			<h2>Setup complete!</h2>
			<p>
				You can change these settings (and more) later in the Settings
				application.
			</p>
			<button className={styles.prevButton} type="button" onClick={onPrev}>
				&#8592;
			</button>
			<button className={styles.nextButton} type="button" onClick={onNext}>
				Start using Tranquility Desktop &#8594;
			</button>
		</>
	);
};

const Greeter = () => {
	const [currentScreen, setCurrentScreen] = useState("greeting");
	const appWindowInfo = useContext(AppWindowInfoContext);
	const close = useWindowManagerStore((state) => state.close);

	const handleDone = () => {
		if (appWindowInfo) {
			close(appWindowInfo.id);
		}
		localStorage.setItem("greeted", "true");
	};

	const CurrentScreen = () => {
		switch (currentScreen) {
			case "greeting":
				return <GreetingScreen onNext={() => setCurrentScreen("theme")} />;
			case "theme":
				return (
					<ThemeScreen
						onPrev={() => setCurrentScreen("greeting")}
						onNext={() => setCurrentScreen("done")}
					/>
				);
			case "done":
				return (
					<DoneScreen
						onPrev={() => setCurrentScreen("theme")}
						onNext={handleDone}
					/>
				);
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
