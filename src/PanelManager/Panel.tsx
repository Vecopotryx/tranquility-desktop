import { cloneElement } from "react";
import styles from "./Panel.module.css";
import type { Panel as PanelType } from "./PanelManagerStore";

export const Panel = ({ panel }: { panel: PanelType }) => {
	return (
		<div
			className={`${styles.panelContainer} ${styles[panel.align]} ${styles[panel.position]}`}
			style={{ width: panel.width }}
		>
			<div
				className={`${styles.panel}`}
				style={{
					margin: panel.margin,
					gridTemplateColumns: panel.middleContents.length
						? "1fr auto 1fr"
						: "auto auto auto",
				}}
			>
				<div className={styles.startSection}>
					{/* Start section */}

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
		</div>
	);
};
