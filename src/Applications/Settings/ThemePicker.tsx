import { useState } from "react";
import classicPreview from "../../assets/img/preview-classic.svg";
import darkPreview from "../../assets/img/preview-dark.svg";
import lightPreview from "../../assets/img/preview-light.svg";
import styles from "./Settings.module.css";

interface ThemePreviewProps {
	theme: string;
	image: string;
	updateTheme: (theme: string) => void;
	currentTheme: string | null;
}

const ThemePreview = ({
	theme,
	image,
	updateTheme,
	currentTheme,
}: ThemePreviewProps) => (
	<button
		type="button"
		className={styles.themePreview}
		onClick={() => updateTheme(theme.toLowerCase())}
	>
		<img
			src={image}
			alt={theme.toLowerCase()}
			className={styles.themePreviewImg}
		/>
		<label>
			<input
				type="radio"
				checked={currentTheme === theme.toLowerCase()}
				readOnly={true}
			/>
			{theme}
		</label>
	</button>
);

export const ThemePicker = () => {
	const [theme, setTheme] = useState<string | null>(
		document.documentElement.getAttribute("data-theme") || "light",
	);
	const updateTheme = (theme: string) => {
		setTheme(theme);
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	};
	return (
		<div className={styles.themePicker}>
			<ThemePreview
				theme={"Light"}
				image={lightPreview}
				updateTheme={updateTheme}
				currentTheme={theme}
			/>
			<ThemePreview
				theme={"Dark"}
				image={darkPreview}
				updateTheme={updateTheme}
				currentTheme={theme}
			/>
			<ThemePreview
				theme={"Classic"}
				image={classicPreview}
				updateTheme={updateTheme}
				currentTheme={theme}
			/>
		</div>
	);
};
