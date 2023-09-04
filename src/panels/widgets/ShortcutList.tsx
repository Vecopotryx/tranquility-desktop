import { useAppList } from '../../contexts/AppContext';
import { useWindowList } from '../../contexts/WindowContext';
import Dropdown from '../Dropdown';
import styled from 'styled-components';

const MenubarList = styled.div`
	position: absolute;
	width: 4cm;
	top: 1cm;
	background-color: rgba(var(--primary-bg), var(--bgopacity));
	border-radius: var(--borderRadius);
	backdrop-filter: blur(10px);
`;

const MenubarButton = styled.button`
	width: 100%;
	background: none;
	border: none;
	cursor: pointer;
	padding: 0.3em;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	color: var(--primary-color);
	height: 1cm;
	font-size: 0.9em;
	text-align: left;

	&:hover {
		border-radius: var(--borderRadius);
		background-color: rgba(128, 128, 128, 0.5);
	}

	> img {
		display: block;
		margin-left: auto;
		height: 0.7cm;
		width: 0.7cm;
		object-fit: contain;
		padding-right: 0.5em;
	}
`;

interface ShortcutListProps {
	text: string;
	customList?: {
		id: number;
		name: string;
		buttonText: string;
		component: JSX.Element;
		appIcon: string;
	}[];
}

export const ShortcutList = ({ text, customList }: ShortcutListProps) => {
	let AppButtons = useAppList().appList;
	const handleOpen = useWindowList().handleOpen;

	if (customList) {
		AppButtons = customList;
	}

	return (
		<Dropdown text={text}>
			<MenubarList>
				{AppButtons.map((appButton, index) => (
					<div key={index}>
						<MenubarButton
							onClick={() =>
								handleOpen(
									appButton.name,
									appButton.component,
									appButton.appIcon
								)
							}>
							<img src={appButton.appIcon} alt=""></img>
							{appButton.buttonText}
						</MenubarButton>
					</div>
				))}
			</MenubarList>
		</Dropdown>
	);
};
