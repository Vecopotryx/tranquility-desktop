import type { JSX } from "react";
import { create } from "zustand";
import { getPanelPreset } from "./PanelPresets";

export type PanelItem = {
	id: string;
	component: JSX.Element;
};

export type Panel = {
	position: "top" | "bottom";
	align: "start" | "middle" | "end";
	margin: string;
	width: string;
	startContents: PanelItem[];
	middleContents: PanelItem[];
	endContents: PanelItem[];
};

interface PanelManagerState {
	panels: Panel[];
	setPanelsPreset: (name: string) => void;
}

export const usePanelManagerStore = create<PanelManagerState>()((set) => ({
	panels: getPanelPreset("default"),
	setPanelsPreset: (name: string) =>
		set(() => ({ panels: getPanelPreset(name) })),
}));
