import { create } from "zustand";
import type { Application } from "../Applications/AppManagerStore";
import { GreeterApp } from "../Applications/Greeter/Greeter";

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
	windows:
		localStorage.getItem("greeted") !== "true"
			? [
					{
						id: highestId,
						index: highestIndex,
						minimized: false,
						app: GreeterApp,
					},
				]
			: [],

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
		set((state) => {
			const remaining = state.windows.filter((w) => w.id !== id);
			if (remaining.length === 0) {
				return { windows: [], currentlyFocused: -1 };
			}

			// Move focus to new highest index window.
			const highestIndexWindow = remaining.reduce(
				(max, window) => (window.index > max.index ? window : max),
				remaining[0],
			);
			return { windows: remaining, currentlyFocused: highestIndexWindow.id };
		}),

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
