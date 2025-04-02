import { useAppManagerStore } from "../../Applications/AppManagerStore";
import { AppButton } from "./AppButton";

export const AppList = () => {
	const list = useAppManagerStore((state) => state.apps);

	return (
		<div>
			{list.map((app) => (
				<AppButton key={app.title} app={app} />
			))}
		</div>
	);
};
