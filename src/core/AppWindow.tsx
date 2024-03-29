import React from 'react';
import { Rnd } from 'react-rnd';
import styled from 'styled-components';
import { MdClose, MdExpandLess, MdExpandMore } from 'react-icons/md';

interface AppWindowProps {
	children: JSX.Element;
	appId: number;
	isFocused: boolean;
	isIframe: boolean;
	title: string;
	index: number;
	handleClose: (appId: number) => void;
	handleFocus: (appId: number) => void;
}

const TBButton = styled.button<{ action: string }>`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 1em;
	transition: transform 0.2s;
	float: ${(p) =>
		p.action === 'close' ? 'var(--titlebarCloseAlign)' : 'right'};
	line-height: 0.7cm;

	&:hover {
		transform: scale(1.5);
	}
`;

const Titlebar = styled.div<{ $focused: boolean }>`
	width: 100%;
	user-select: none;
	background: ${(p) =>
		p.$focused ? 'var(--titlebarBg)' : 'var(--unfocusedTitlebarBg)'};
	color: ${(p) =>
		p.$focused ? 'var(--titlebarText)' : 'var(--unfocused-color)'};
	text-align: var(--titlebarTextAlign);
	height: 0.7cm;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	font-size: 15px;
	line-height: 0.7cm;

	> button {
		color: ${(p) =>
			p.$focused ? 'var(--titlebarText)' : 'var(--unfocused-color)'};
	}
`;

const InternalFrameOverlay = styled.div`
	height: 100%;
	width: 100%;
	position: absolute;
	top: 0.7cm;
	left: 0;
	display: block;
`;

const Window = styled(Rnd)<{ $index: number }>`
	min-height: 0.7cm;
	min-width: 5em;
	display: block;
	box-shadow: 8px 15px 0px 0px rgba(0, 0, 0, 0.75);
	overflow: hidden;
	backdrop-filter: blur(10px);
	border-radius: var(--borderRadius);
	border: var(--border);
	color: var(--primary-color);
	background-color: rgba(var(--primary-bg), var(--bgopacity));
	transition:
		background-color 0.3s,
		color 0.3s;
	z-index: ${(p) => p.$index};
`;

const AppWrapper = styled.div`
	display: block;
	height: 100%;
	width: 100%;
`;

const AppContent = styled.div<{ $collapsed: boolean }>`
	overflow-y: auto;
	overflow-x: hidden;
	display: ${(p) => (p.$collapsed ? 'none' : 'block')};
	height: calc(100% - 0.7cm);

	> * {
		cursor: default;
	}
`;

const AppWindow = (props: AppWindowProps) => {
	const [dimensions, setDimensions] = React.useState({
		maxHeight: 20000,
		storedHeight: document.documentElement.clientHeight / 2
	});

	const [isCollapsed, setIsCollapsed] = React.useState(false);
	const [frameOverlay, setFrameOverlay] = React.useState(false);

	const updateCollapse = () => {
		if (rndRef != null) {
			if (isCollapsed) {
				setDimensions({
					maxHeight: 20000,
					storedHeight: dimensions.storedHeight
				});
				rndRef.updateSize({
					width: rndRef.getSelfElement()?.clientWidth as number,
					height: dimensions.storedHeight
				});
			} else {
				setDimensions({
					maxHeight: 0,
					storedHeight: rndRef.getSelfElement()?.clientHeight as number
				});
				rndRef.updateSize({
					width: rndRef.getSelfElement()?.clientWidth as number,
					height: 0
				});
			}
		}

		setIsCollapsed(!isCollapsed);
	};

	let rndRef: Rnd | null;

	const handleResizeOrDrag = (status: boolean) => {
		setFrameOverlay(status);
		//props.updateFrameOverlay(status);
	};

	React.useEffect(() => {
		if (!props.isFocused && props.isIframe) {
			setFrameOverlay(true);
		} else if (props.isIframe) {
			setFrameOverlay(false);
		}
	}, [props.isFocused]);

	return (
		<>
			<Window
				$index={props.index}
				maxHeight={dimensions.maxHeight}
				ref={(c: Rnd) => {
					rndRef = c;
				}}
				cancel={
					'.' +
					TBButton.styledComponentId +
					', .' +
					AppContent.styledComponentId +
					' >*'
				}
				onResizeStart={() => {
					handleResizeOrDrag(true);
				}}
				onResizeStop={() => {
					handleResizeOrDrag(false);
				}}
				onDragStart={() => {
					handleResizeOrDrag(true);
				}}
				onDragStop={() => {
					handleResizeOrDrag(false);
				}}
				default={{
					x:
						(document.documentElement.clientWidth -
							document.documentElement.clientWidth / 2) /
						2,
					y:
						(document.documentElement.clientHeight - dimensions.storedHeight) /
						2,
					width: document.documentElement.clientWidth / 2,
					height: dimensions.storedHeight
				}}>
				<AppWrapper onPointerDown={() => props.handleFocus(props.appId)}>
					<Titlebar $focused={props.isFocused}>
						<TBButton
							action="close"
							onClick={() => props.handleClose(props.appId)}>
							{' '}
							<MdClose />{' '}
						</TBButton>
						<p>{props.title}</p>
						<TBButton action="collapse" onClick={() => updateCollapse()}>
							{isCollapsed ? <MdExpandMore /> : <MdExpandLess />}
						</TBButton>
					</Titlebar>
					<AppContent $collapsed={isCollapsed}>
						{frameOverlay && <InternalFrameOverlay />}
						{props.children}
					</AppContent>
				</AppWrapper>
			</Window>
		</>
	);
};

export default AppWindow;
