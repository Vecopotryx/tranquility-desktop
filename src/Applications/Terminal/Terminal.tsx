import { type ReactNode, useContext, useEffect, useRef, useState } from "react";
import type { Application } from "../AppManagerStore";
import styles from "./Terminal.module.css";
import icon from "../../assets/img/icons/terminal.png";
import { AppWindowInfoContext } from "../../WindowManager/AppWindow";
import { useWindowManagerStore } from "../../WindowManager/WindowManagerStore";

interface CommandEntry {
	timestamp: number;
	command: string;
	output: ReactNode;
}

const Neofetch = () => (
	<pre>
		{`
   ____________________ 
  |  |              |  |      user@Tranquility
  |[]|              |[]|      --------
  |  |              |  |      OS: Tranquility Desktop
  |  |              |  |      Host: Waygate Miga ST 740
  |  |              |  |      Kernel: 2.0.0
  |  |______________|  |      Packages: 8 (tpm)
  |                    |      Shell: /system/bin/tdsh
  |     ____________   |      DE: Tranquility
  |    | __      |  |  |      WM: Tranquility
  |    ||  |     |  |  |      CPU: Interola 68040+ (1) @ 230 MHz
  |    ||__|     |  |  |      GPU: 2dfx Vodude 32
  |____|_________|__|__|      Memory: 5 MiB / 256 MiB
  `}
	</pre>
);

const commands = new Map<string, (args: string[]) => ReactNode>([
	["neofetch", () => <Neofetch />],
	[
		"help",
		() => (
			<p>
				Available commands: <br />
				neofetch - Display system info <br />
				clear - Clear the terminal <br />
				help - Show this help message <br />
				exit - Close the terminal window
			</p>
		),
	],
	["clear", () => null],
	["exit", () => null],
]);

const Prompt = () => {
	return <span style={{ color: "coral" }}>{">"}</span>;
};

const Terminal = () => {
	const [commandHistory, setCommandHistory] = useState<CommandEntry[]>([]);
	const [currentInput, setCurrentInput] = useState<string>("");
	const appWindowInfo = useContext(AppWindowInfoContext);
	const close = useWindowManagerStore((state) => state.close);

	const inputRef = useRef<HTMLInputElement>(null);

	// Auto-focus input on mount and on adding new
	// biome-ignore lint/correctness/useExhaustiveDependencies: We want to focus the input on new command output so it scrolls down
	useEffect(() => {
		// By blurring first and then focusing, we ensure the scroll jumps to bottom
		inputRef.current?.blur();
		inputRef.current?.focus();
	}, [commandHistory]);

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentInput(e.target.value);
	};

	const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleCommand(currentInput.trim());
			setCurrentInput("");
		}
	};

	const handleCommand = (input: string) => {
		const [command, ...args] = input.split(" ");
		let output: ReactNode = <p>Command not found: {command}</p>;

		if (commands.has(command)) {
			if (command === "clear") {
				setCommandHistory([]);
				return;
			}
			if (command === "exit") {
				if (appWindowInfo) {
					close(appWindowInfo.id);
				}
				return;
			}
			output = commands.get(command)!(args);
		}

		setCommandHistory([
			...commandHistory,
			{ timestamp: Date.now(), command: input, output },
		]);
	};

	return (
		<div
			onClick={() => inputRef.current?.focus()}
			className={styles.terminalContainer}
			onKeyDown={() => inputRef.current?.focus()}
		>
			{commandHistory.map((entry) => (
				<div key={entry.timestamp}>
					<p>
						<Prompt /> {entry.command}
					</p>
					{entry.output}
				</div>
			))}
			<div className={styles.inputLine}>
				<Prompt />
				<input
					ref={inputRef}
					value={currentInput}
					onChange={handleInput}
					onKeyUp={handleKeyUp}
				/>
			</div>
		</div>
	);
};

export const TerminalApp: Application = {
	title: "Terminal",
	icon: icon,
	type: "component",
	component: <Terminal />,
};
