import type { Application } from "./AppManagerStore";
import { BrowserApp } from "./Browser/Browser";
import { ClockApp } from "./Clock/Clock";
import { TerminalApp } from "./Terminal/Terminal";

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

const AmigaBoingBalls: Application = {
	title: "Amiga Boing Balls",
	icon: "https://johnmattsson.github.io/AmigaBoingBalls/static/favicon.png",
	type: "iframe",
	url: "https://johnmattsson.github.io/AmigaBoingBalls/index.html",
	attribution: "https://github.com/johnmattsson/AmigaBoingBalls",
};

export const defaultApps: Application[] = [
	EssenceReader,
	ChipPlayerJS,
	AmigaBoingBalls,
	ClockApp,
	TerminalApp,
	BrowserApp,
];
