import { useWindowManagerStore } from "../../WindowManager/WindowManagerStore";

export const WindowList = () => {
	const focus = useWindowManagerStore((state) => state.focus);
	const windows = useWindowManagerStore((state) => state.windows);

	return (
		<div
			style={{
				whiteSpace: "nowrap",
				overflowX: "auto",
				display: "flex",
				gap: "0.5em",
			}}
		>
			{windows.map((w) => (
				<button key={w.id} type="button" onClick={() => focus(w.id)}>
					{w.app.title}
				</button>
			))}
		</div>
	);
};
