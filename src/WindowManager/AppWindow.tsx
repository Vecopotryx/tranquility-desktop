import { memo } from "react";
import { Rnd } from "react-rnd";
import { type WindowObject, useWindowManagerStore } from "./WindowManagerStore";

export const AppWindow = memo(
	({ window }: { window: WindowObject }) => {
		const isFocused = useWindowManagerStore(
			(state) => state.currentlyFocused === window.id,
		);

		const focus = useWindowManagerStore((state) => state.focus);
		const close = useWindowManagerStore((state) => state.close);

		console.log("Rerendered id ", window.id);
		return (
			<Rnd
				style={{
					backgroundColor: "lightgray",
					boxShadow: "8px 15px 0px 0px rgba(0, 0, 0, 0.75)",
					zIndex: window.index,
				}}
				onMouseDown={() => focus(window.id)}
			>
				<div>
					<button type="button" onClick={() => close(window.id)}>
						x
					</button>
					title: {window.app.title}
				</div>
				<div>
					id: {window.id}
					<br />
					index: {window.index}
					<br />
					{isFocused ? "focused" : ""}
				</div>
				{window.app.type === "component" ? (
					window.app.component
				) : (
					<iframe
						title={window.app.title}
						height="100%"
						width="100%"
						src={window.app.url}
						style={{ border: "none" }}
					/>
				)}
			</Rnd>
		);
	},
	(prev, next) =>
		prev.window.id === next.window.id &&
		prev.window.index === next.window.index,
);
