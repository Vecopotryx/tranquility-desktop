import { useAppManagerStore } from "../../Applications/AppManagerStore";
import { AppButton } from "./AppButton";
import styles from "../Panel.module.css";

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
