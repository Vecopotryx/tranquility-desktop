import styled from 'styled-components';

type Widget = {
	name: string;
	component: JSX.Element;
};

interface PanelProps {
	position: string;
	widgets: Widget[];
}

const PanelDiv = styled.div<{ $position: string }>`
	${(p) => p.$position}: 0;
	position: absolute;
	display: grid;
	grid-template-columns: auto auto 1fr auto;
	width: calc(100% - 2em);
	margin: 0.5em;
	column-gap: 0.3em;
	padding: 0 0.3em;
	line-height: 0.9cm;
	height: 0.9cm;
	backdrop-filter: blur(10px);
	background-color: rgba(var(--primary-bg), var(--bgopacity));
	user-select: none;

	${(p) =>
		(p.$position === 'right' || p.$position === 'left') &&
		`
	grid-template-columns: 1fr;
	overflow-x: hidden;
	height: calc(100% - 2em);
	width: 0.9cm;
	margin: 0.5em;
	row-gap: 0.3em;
	padding: 0.3em 0;
	line-height: 0.9cm;
  `}
`;

export const Panel = ({ position, widgets }: PanelProps) => {
	return (
		<PanelDiv $position={position}>
			{widgets.map((widget, index) => (
				<div key={index}>{widget.component}</div>
			))}
		</PanelDiv>
	);
};
