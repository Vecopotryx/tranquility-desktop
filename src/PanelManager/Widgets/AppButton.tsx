import {
	useWindowManagerStore,
	type Application,
} from "../../WindowManager/WindowManagerStore";

export const AppButton = ({ app }: { app: Application }) => {
	const open = useWindowManagerStore((state) => state.open);

	return (
		<button type="button" onClick={() => open(app)}>
			Open {app.title}
		</button>
	);
};
