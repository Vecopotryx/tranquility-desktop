import { styled } from 'styled-components';
import { useWindowList } from '../../contexts/WindowContext';

const OpenWindowListDiv = styled.span`
	display: flex;
	justify-content: left;
	align-items: center;
	height: 0.9cm;
	overflow-x: scroll;
	border-left: 1px solid gray;
	border-right: 1px solid gray;
`;

const WindowListItemDiv = styled.div<{ $isFocused: boolean }>`
	margin-left: 0.1cm;
	cursor: pointer;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	padding-right: 0.4em;
	background-color: ${(p) =>
		p.$isFocused ? 'rgba(var(--contrast-color),0.1)' : ''};

	&:hover {
		background-color: rgba(128, 128, 128, 0.5);
	}

	> img {
		vertical-align: text-top;
		height: 0.5cm;
		width: 0.5cm;
		object-fit: contain;
	}
`;

interface WindowListItemProps {
	title: string;
	isFocused: boolean;
	appIcon: string;
	onClick: () => void;
}

const WindowListItem = ({
	title,
	appIcon,
	isFocused,
	onClick
}: WindowListItemProps) => {
	return (
		// On double click close?
		<WindowListItemDiv onClick={onClick} $isFocused={isFocused}>
			<img src={appIcon} alt={title} />
			{title}
		</WindowListItemDiv>
	);
};

export const OpenWindowList = () => {
	const windowList = useWindowList().windowList;
	const handleFocus = useWindowList().handleFocus;

	return (
		<OpenWindowListDiv>
			{windowList.map((app) => (
				<WindowListItem
					key={app.id}
					title={app.title}
					isFocused={app.isFocused}
					appIcon={app.appIcon}
					onClick={() => handleFocus(app.id)}
				/>
			))}
		</OpenWindowListDiv>
	);
};
