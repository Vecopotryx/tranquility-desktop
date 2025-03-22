import { Panel } from "./Panel";
import { usePanelManagerStore } from "./PanelManagerStore";

export const PanelManager = () => {
	const panels = usePanelManagerStore((state) => state.panels);

	return (
		<>
			{panels.map((panel) => (
				<Panel key={panel.position + panel.align} panel={panel} />
			))}
		</>
	);
};
