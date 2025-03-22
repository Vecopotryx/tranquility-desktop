import { SettingsApp } from "../Applications/Settings/Settings";
import type { Panel } from "./PanelManagerStore";
import { AppButton } from "./Widgets/AppButton";
import { Dropdown } from "./Widgets/Dropdown";
import { InlineClock } from "./Widgets/InlineClock";
import { WindowList } from "./Widgets/WindowList";

const defaultPanel: Panel = {
	position: "top",
	align: "start",
	margin: "0.5em",
	width: "100%",
	startContents: [
		{
			id: "applications",
			component: (
				<Dropdown text="Applications">
					<AppButton app={SettingsApp} />
				</Dropdown>
			),
		},
		{
			id: "options",
			component: (
				<Dropdown text="Options">
					<AppButton app={SettingsApp} />
				</Dropdown>
			),
		},
		{ id: "windowlist", component: <WindowList /> },
	],
	middleContents: [],
	endContents: [{ id: "clock", component: <InlineClock /> }],
};

const splitPanelPreset: Panel[] = [
	{
		position: "top",
		align: "start",
		margin: "0.5em",
		width: "auto",
		startContents: [
			{
				id: "applications",
				component: (
					<Dropdown text="Applications">
						<AppButton app={SettingsApp} />
					</Dropdown>
				),
			},
			{
				id: "options",
				component: (
					<Dropdown text="Options">
						<AppButton app={SettingsApp} />
					</Dropdown>
				),
			},
			{ id: "windowlist", component: <WindowList /> },
		],
		middleContents: [],
		endContents: [],
	},
	{
		position: "top",
		align: "end",
		margin: "0.5em",
		width: "auto",
		startContents: [],
		middleContents: [],
		endContents: [{ id: "clock", component: <InlineClock /> }],
	},
];

export const getPanelPreset = (name: string): Panel[] => {
	switch (name) {
		case "default":
			return [defaultPanel];
		case "split":
			return splitPanelPreset;
		default:
			return [defaultPanel];
	}
};
