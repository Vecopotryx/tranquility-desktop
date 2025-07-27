import { createContext, memo, useState } from "react";
import { Rnd } from "react-rnd";
import styles from "./Window.module.css";
import { type WindowObject, useWindowManagerStore } from "./WindowManagerStore";

type AppWindowInfo = {
	id: number;
};

export const AppWindowInfoContext = createContext<AppWindowInfo | null>(null);

export const AppWindow = memo(
	({ window }: { window: WindowObject }) => {
		const isFocused = useWindowManagerStore(
			(state) => state.currentlyFocused === window.id,
		);

		const focus = useWindowManagerStore((state) => state.focus);
		const close = useWindowManagerStore((state) => state.close);
		const minimize = useWindowManagerStore((state) => state.minimize);

		const [frameOverlay, setFrameOverlay] = useState(false);

		return (
			<Rnd
				style={{
					zIndex: window.index,
					display: window.minimized ? "none" : "grid",
				}}
				className={styles.window}
				onMouseDown={() => focus(window.id)}
				cancel={`.${styles.titlebar}>button, .${styles.content} >*`}
				onResizeStart={() => setFrameOverlay(true)}
				onResizeStop={() => setFrameOverlay(false)}
				onDragStart={() => setFrameOverlay(true)}
				onDragStop={() => setFrameOverlay(false)}
				default={{
					x:
						(document.documentElement.clientWidth -
							document.documentElement.clientWidth / 2) /
						2,
					y:
						(document.documentElement.clientHeight -
							document.documentElement.clientHeight / 2) /
						2,
					width: document.documentElement.clientWidth / 2,
					height: document.documentElement.clientHeight / 2,
				}}
			>
				<div
					className={`${styles.titlebar} ${isFocused ? styles.focused : ""}`}
				>
					<button type="button" onClick={() => close(window.id)}>
						&#x2715;
					</button>
					{window.app.title}
					<button type="button" onClick={() => minimize(window.id)}>
						&#x25B2;
					</button>
				</div>
				<div
					className={styles.content}
					style={{
						overflow: window.app.type === "iframe" ? "hidden" : "",
					}}
				>
					{window.app.type === "component" ? (
						<AppWindowInfoContext.Provider value={{ id: window.id }}>
							{window.app.component}
						</AppWindowInfoContext.Provider>
					) : (
						<>
							{(frameOverlay === true || !isFocused) && (
								<div className={styles.frameOverlay} />
							)}
							<iframe
								title={window.app.title}
								height="100%"
								width="100%"
								src={window.app.url}
							/>
						</>
					)}
				</div>
			</Rnd>
		);
	},
	(prev, next) =>
		prev.window.id === next.window.id &&
		prev.window.index === next.window.index &&
		prev.window.minimized === next.window.minimized,
);
