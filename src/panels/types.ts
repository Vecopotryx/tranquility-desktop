export type Widget = {
	name: string;
	component: JSX.Element;
};

export type PanelStyle = {
	horizontalAlignment: string;
	verticalAlignment: string;
	width: string;
	height: string;
};

export interface PanelProps {
	style: PanelStyle;
	widgets: Widget[];
}
