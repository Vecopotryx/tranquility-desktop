import { AppWindow } from "./AppWindow";
import { useWindowManagerStore } from "./WindowManagerStore";

export const WindowManager = () => {
	const windows = useWindowManagerStore((state) => state.windows);

	return (
		<>
			{windows.map((window) => (
				<AppWindow key={window.id} window={window} />
			))}
		</>
	);
};
