import { SettingsApp } from "./Settings/Settings";
import type { Application } from "./AppManagerStore";

const EssenceReader: Application = {
	title: "Essence Reader",
	icon: "https://essence-reader.pages.dev/favicon.png",
	type: "iframe",
	url: "https://essence-reader.pages.dev",
};

export const defaultApps: Application[] = [SettingsApp, EssenceReader];
