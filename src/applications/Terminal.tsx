import { useState, useRef, useEffect } from 'react';

interface TerminalProps {
	id?: number;
	handleClose?: (id: number) => void;
}

const Terminal = (props: TerminalProps) => {
	let currentInput = '';
	const inputRef = useRef<HTMLInputElement>(null);

	const InputLine = () => {
		return (
			<div>
				<UserIndicator />
				<input
					type="text"
					onChange={(e) => {
						currentInput = e.target.value;
					}}
					onKeyUp={(e) => {
						if (e.key === 'Enter') handleInput();
					}}
					style={{
						border: 'none',
						background: 'transparent',
						color: 'var(--primary-color)'
					}}
					ref={inputRef}></input>
			</div>
		);
	};

	const [commandHistory, setCommandHistory] = useState<JSX.Element[]>([]);

	useEffect(() => {
		inputRef.current?.focus();
	}, [commandHistory]);

	const handleInput = () => {
		switch (currentInput.toLowerCase()) {
			case 'test':
				handleCommand(<Test />);
				break;
			case 'clear':
				setCommandHistory([]);
				break;
			case 'neofetch':
				handleCommand(<Neofetch />);
				break;
			case 'exit':
				if (props.id !== undefined && props.handleClose !== undefined) {
					props.handleClose(props.id);
				}
				break;
			default:
				handleCommand(<InvalidCommand />);
				break;
		}
	};

	const handleCommand = (element: JSX.Element) => {
		setCommandHistory([...commandHistory, <PrevUserInput />, <>{element}</>]);
	};

	const PrevUserInput = () => {
		return (
			<p>
				<UserIndicator />
				{currentInput}
			</p>
		);
	};

	const UserIndicator = () => {
		return <p style={{ color: 'aqua' }}>$ </p>;
	};

	const Test = () => {
		return <>Test</>;
	};

	const Neofetch = () => {
		return <pre>{neofetchContent}</pre>;
	};

	const neofetchContent = `
   ____________________ 
  |  |              |  |      user@Tranquility
  |[]|              |[]|      --------
  |  |              |  |      OS: Tranquility Desktop
  |  |              |  |      Host: Waygate Miga ST 740
  |  |              |  |      Kernel: 2.0.0
  |  |______________|  |      Packages: 8 (rpt)
  |                    |      Shell: /system/rdsh
  |     ____________   |      DE: Tranquility
  |    | __      |  |  |      WM: RWM
  |    ||  |     |  |  |      CPU: Interola 68040+ (1) @ 230 MHz
  |    ||__|     |  |  |      GPU: 2dfx Vodude 16
  |____|_________|__|__|      Memory: 5 MiB / 256 MiB
`;

	const InvalidCommand = () => {
		return (
			<p>
				<i>{currentInput}</i> is not a valid command
			</p>
		);
	};

	return (
		<div style={{ height: '100%' }} onClick={() => inputRef.current?.focus()}>
			{commandHistory.map((element, index) => (
				<div key={index}>{element}</div>
			))}

			<InputLine />
		</div>
	);
};

export default Terminal;
