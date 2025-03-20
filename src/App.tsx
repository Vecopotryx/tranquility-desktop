import { WindowManager } from "./WindowManager/WindowManager";
import { useWindowManagerStore } from "./WindowManager/WindowManagerStore";

function App() {
	const open = useWindowManagerStore((state) => state.open);
	return (
		<>
			<button
				type="button"
				onClick={() =>
					open({ title: "Hello", type: "component", component: <h1>Hello</h1> })
				}
			>
				Open
			</button>
			<WindowManager />
		</>
	);
}

export default App;
