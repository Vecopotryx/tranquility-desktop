import type { JSX } from "react";
import { create } from "zustand";
import { defaultApps } from "./DefaultApps";

export type Application = {
	title: string;
	icon: string;
} & (
	| { type: "component"; component: JSX.Element }
	| { type: "iframe"; url: string; attribution?: string }
);

interface AppManagerState {
	apps: Application[];
	addApp: (app: Application) => void;
	removeApp: (app: Application) => void;
}

export const useAppManagerStore = create<AppManagerState>()((set) => ({
	apps: defaultApps,
	addApp: (app: Application) =>
		set((state) => ({ apps: [...state.apps, app] })),
	removeApp: (app: Application) =>
		set((state) => ({ apps: state.apps.filter((obj) => obj !== app) })),
}));
