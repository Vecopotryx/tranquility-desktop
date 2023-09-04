import { useState } from 'react';
import Logo from '../assets/img/LogoSideView.png';
import BackgroundPicker from './settings/BackgroundPicker';
import styled from 'styled-components';
import ThemePicker from './settings/ThemePicker';

const NavButton = styled.h1`
	margin: auto;
	width: max-content;
	font-size: 5em;
	cursor: pointer;
	user-select: none;
	transition: transform 0.2s;

	:hover {
		transform: scale(1.25);
	}
`;

const BottomNavButton = styled(NavButton)<{ side: string }>`
	position: fixed;
	bottom: 0;
	${(p) => p.side}: 0;
	padding: 1%;
	font-size: 3em;
`;

const GreeterContainer = styled.div`
	padding: 0.5em;
	text-align: center;
`;

interface GreeterProps {
	id: number;
	handleClose: (id: number) => void;
}

const Greeter = (props: GreeterProps) => {
	const [currentScreen, setCurrentScreen] = useState('greeting');

	const Greeting = () => {
		return (
			<>
				<img src={Logo} style={{ width: '10%', height: '10%' }} alt=""></img>
				<h1>Welcome to Tranquility Desktop</h1>
				<p>
					Configure themes and other settings by pressing the button below, or
					close this window to use default settings.
				</p>
				<NavButton onClick={() => setCurrentScreen('theme')}>
					{' '}
					&#8594;{' '}
				</NavButton>
			</>
		);
	};

	interface ButtonProps {
		previous: string;
		next: string;
	}

	const ForwardBackButtons = ({ previous, next }: ButtonProps) => {
		return (
			<>
				<BottomNavButton side="left" onClick={() => setCurrentScreen(previous)}>
					&#8592;
				</BottomNavButton>
				<BottomNavButton side="right" onClick={() => setCurrentScreen(next)}>
					&#8594;
				</BottomNavButton>
			</>
		);
	};

	const GreeterTheme = () => {
		return (
			<>
				<h1>Lets pick a theme</h1>
				<ThemePicker />
				<ForwardBackButtons previous="greeting" next="background" />
			</>
		);
	};

	const GreeterBackground = () => {
		return (
			<>
				<h1>Lets pick a background</h1>
				<BackgroundPicker />
				<ForwardBackButtons previous="theme" next="complete" />
			</>
		);
	};

	const Complete = () => {
		return (
			<>
				<h1>Setup complete</h1>
				<h4>
					You can change these settings (and more) later using the settings app.
				</h4>

				<BottomNavButton
					side="left"
					onClick={() => setCurrentScreen('background')}>
					&#8592;
				</BottomNavButton>

				<BottomNavButton
					side="right"
					onClick={() => {
						localStorage.setItem('greeted', 'true');
						props.handleClose(props.id);
					}}>
					Start using Tranquility &#8594;
				</BottomNavButton>
			</>
		);
	};

	const CurrentScreen = () => {
		switch (currentScreen) {
			case 'greeting':
				return <Greeting />;
			case 'theme':
				return <GreeterTheme />;
			case 'background':
				return <GreeterBackground />;
			case 'complete':
				return <Complete />;
			default:
				return <h2>Error</h2>;
		}
	};

	return (
		<GreeterContainer>
			<CurrentScreen />
		</GreeterContainer>
	);
};

export default Greeter;
