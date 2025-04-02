import type { Application } from "./AppManagerStore";
import { ClockApp } from "./Clock/Clock";

const EssenceReader: Application = {
	title: "Essence Reader",
	icon: "https://essence-reader.pages.dev/favicon.png",
	type: "iframe",
	url: "https://essence-reader.pages.dev",
	attribution: "https://github.com/Vecopotryx/essence-reader",
};

const ChipPlayerJS: Application = {
	title: "Chip Player JS",
	icon: "https://chiptune.app/icon-64x64.png",
	type: "iframe",
	url: "https://chiptune.app/",
	attribution: "https://github.com/mmontag/chip-player-js",
};

export const defaultApps: Application[] = [
	EssenceReader,
	ChipPlayerJS,
	ClockApp,
];
