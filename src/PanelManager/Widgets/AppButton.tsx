import type { Application } from "../../Applications/AppManagerStore";
import { useWindowManagerStore } from "../../WindowManager/WindowManagerStore";

export const AppButton = ({ app }: { app: Application }) => {
	const open = useWindowManagerStore((state) => state.open);

	return (
		<button type="button" onClick={() => open(app)} style={{ display: "flex" }}>
			<img src={app.icon} alt="" />
			<span>{app.title}</span>
		</button>
	);
};
