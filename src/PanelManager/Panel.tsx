import { type JSX, cloneElement } from "react";
import { useWindowManagerStore } from "../WindowManager/WindowManagerStore";
import styles from "./Panel.module.css";
import { InlineClock } from "./Widgets/InlineClock";
import { WindowList } from "./Widgets/WindowList";

type PanelItem = {
	id: string;
	component: JSX.Element;
};

type Panel = {
	width: string;
	startContents: PanelItem[];
	middleContents: PanelItem[];
	endContents: PanelItem[];
};

const defaultPanel: Panel = {
	width: "100%",
	startContents: [{ id: "windowlist", component: <WindowList /> }],
	middleContents: [],
	endContents: [{ id: "clock", component: <InlineClock /> }],
};

export const Panel = () => {
	const open = useWindowManagerStore((state) => state.open);

	const panel = defaultPanel;

	return (
		<div
			className={styles.panel}
			style={{
				width: panel.width,
				gridTemplateColumns: panel.middleContents.length
					? "1fr auto 1fr"
					: "auto auto auto",
			}}
		>
			<div className={styles.startSection}>
				{/* Start section */}

				<button
					type="button"
					onClick={() =>
						open({
							title: "Hello",
							type: "component",
							component: <h1>Hello</h1>,
						})
					}
				>
					Open
				</button>
				{panel.startContents.map((obj) =>
					cloneElement(obj.component, { key: obj.id }),
				)}
			</div>

			<div className={styles.middleSection}>
				{/* Middle section */}

				{panel.middleContents.map((obj) =>
					cloneElement(obj.component, { key: obj.id }),
				)}
			</div>

			<div className={styles.endSection}>
				{/* End section */}

				{panel.endContents.map((obj) =>
					cloneElement(obj.component, { key: obj.id }),
				)}
			</div>
		</div>
	);
};
