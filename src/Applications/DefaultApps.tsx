import type { Application } from "./AppManagerStore";

const EssenceReader: Application = {
	title: "Essence Reader",
	icon: "https://essence-reader.pages.dev/favicon.png",
	type: "iframe",
	url: "https://essence-reader.pages.dev",
};

export const defaultApps: Application[] = [EssenceReader];
