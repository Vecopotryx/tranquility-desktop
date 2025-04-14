import { useWindowManagerStore } from "../../WindowManager/WindowManagerStore";
import styles from "../Panel.module.css";

export const WindowList = ({ showTitles }: { showTitles?: boolean }) => {
	const focus = useWindowManagerStore((state) => state.focus);
	const windows = useWindowManagerStore((state) => state.windows);
	const currentlyFocused = useWindowManagerStore(
		(state) => state.currentlyFocused,
	);

	return (
		<div style={{}} className={styles.windowList}>
			{windows.map((w) => (
				<button
					key={w.id}
					type="button"
					onClick={() => focus(w.id)}
					className={`${w.id === currentlyFocused ? styles.focused : ""} ${w.minimized ? styles.minimized : ""}`}
				>
					<img src={w.app.icon} alt="" />
					{showTitles ? w.app.title : ""}
				</button>
			))}
		</div>
	);
};
