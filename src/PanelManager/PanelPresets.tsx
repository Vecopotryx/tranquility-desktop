import { SettingsApp } from "../Applications/Settings/Settings";
import type { Panel } from "./PanelManagerStore";
import { AppButton } from "./Widgets/AppButton";
import { AppList } from "./Widgets/AppList";
import { Dropdown } from "./Widgets/Dropdown";
import { InlineClock } from "./Widgets/InlineClock";
import { WindowList } from "./Widgets/WindowList";

const getDefaultPanel = (): Panel[] => [
	{
		position: "top",
		align: "start",
		margin: "0.5em",
		width: "100%",
		startContents: [
			{
				id: "applications",
				component: (
					<Dropdown text="Applications">
						<AppList />
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
			{ id: "windowlist", component: <WindowList showTitles /> },
		],
		middleContents: [],
		endContents: [{ id: "clock", component: <InlineClock /> }],
	},
];

// Should match Retro Desktop Environment
const getRdePanel = (): Panel[] => [
	{
		position: "top",
		align: "start",
		margin: "0.5em",
		width: "100%",
		startContents: [
			{
				id: "applications",
				component: (
					<Dropdown text="Applications">
						<AppList />
					</Dropdown>
				),
			},
			{
				id: "file",
				component: <button type="button">File</button>,
			},
			{
				id: "options",
				component: (
					<Dropdown text="Options">
						<AppButton app={SettingsApp} />
					</Dropdown>
				),
			},
			{
				id: "arrange",
				component: <button type="button">Arrange</button>,
			},
			{
				id: "help",
				component: <button type="button">?</button>,
			},
			{ id: "windowlist", component: <WindowList /> },
		],
		middleContents: [],
		endContents: [{ id: "clock", component: <InlineClock /> }],
	},
];

const getSplitPanelPreset = (): Panel[] => [
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
						<AppList />
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
			return getDefaultPanel();
		case "split":
			return getSplitPanelPreset();
		case "rde":
			return getRdePanel();
		default:
			return getDefaultPanel();
	}
};
