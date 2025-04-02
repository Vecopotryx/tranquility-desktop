import { create } from "zustand";
import type { Application } from "../Applications/AppManagerStore";

interface WindowManagerState {
	windows: WindowObject[];
	currentlyFocused: number;
	open: (app: Application) => void;
	close: (id: number) => void;
	focus: (id: number) => void;
}

export type WindowObject = {
	id: number;
	index: number;
	app: Application;
};

let highestIndex = 0;
let highestId = 0;

export const useWindowManagerStore = create<WindowManagerState>()((set) => ({
	currentlyFocused: 0,
	windows: [
		// {
		// 	id: highestId,
		// 	index: highestIndex,
		// 	app: {
		// 		title: "Essence Reader",
		// 		type: "iframe",
		// 		url: "https://essence-reader.pages.dev/",
		// 	},
		// },
	],

	open: (app) =>
		set((state) => {
			const id = ++highestId;

			const newWindow: WindowObject = {
				id,
				index: ++highestIndex,
				app,
			};

			return { windows: [...state.windows, newWindow], currentlyFocused: id };
		}),

	close: (id: number) =>
		set((state) => ({ windows: state.windows.filter((w) => w.id !== id) })),

	focus: (id: number) =>
		set((state) => {
			if (state.currentlyFocused === id) return {};

			return {
				currentlyFocused: id,
				windows: state.windows.map((w) =>
					w.id === id ? { ...w, index: ++highestIndex } : w,
				),
			};
		}),
}));
