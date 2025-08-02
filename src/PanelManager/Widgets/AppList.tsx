import { useAppManagerStore } from "../../Applications/AppManagerStore";
import styles from "../Panel.module.css";
import { AppButton } from "./AppButton";

export const AppList = () => {
	const list = useAppManagerStore((state) => state.apps);

	return (
		<div className={styles.appList}>
			{list.map((app) => (
				<AppButton key={app.title} app={app} />
			))}
		</div>
	);
};
