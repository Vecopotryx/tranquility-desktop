import { create } from "zustand";
import type { Application } from "../Applications/AppManagerStore";

interface WindowManagerState {
	windows: WindowObject[];
	currentlyFocused: number;
	open: (app: Application) => void;
	close: (id: number) => void;
	minimize: (id: number) => void;
	focus: (id: number) => void;
}

export type WindowObject = {
	id: number;
	index: number;
	minimized: boolean;
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
				minimized: false,
				app,
			};

			return { windows: [...state.windows, newWindow], currentlyFocused: id };
		}),

	close: (id: number) =>
		set((state) => ({ windows: state.windows.filter((w) => w.id !== id) })),

	minimize: (id: number) =>
		set((state) => ({
			currentlyFocused: -1,
			windows: state.windows.map((w) =>
				w.id === id ? { ...w, minimized: true } : w,
			),
		})),

	focus: (id: number) =>
		set((state) => {
			if (state.currentlyFocused === id) return {};

			return {
				currentlyFocused: id,
				windows: state.windows.map((w) =>
					w.id === id ? { ...w, index: ++highestIndex, minimized: false } : w,
				),
			};
		}),
}));
