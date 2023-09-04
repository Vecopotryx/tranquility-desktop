import styled from 'styled-components';
import { PanelProps } from './types';

const PanelDiv = styled.div<{ $style: PanelProps['style'] }>`
	position: absolute;
	display: grid;
	grid-template-columns: auto auto minmax(0, 1fr) auto;
	width: calc(${(p) => p.$style?.width} - 0.6em);
	column-gap: 0.3em;
	padding: 0 0.3em;
	line-height: 0.9cm;
	height: 0.9cm;
	backdrop-filter: blur(10px);
	background-color: rgba(var(--primary-bg), var(--bgopacity));
	user-select: none;

	left: ${(p) => p.$style?.horizontalAlignment === 'left' && '0'};
	right: ${(p) => p.$style?.horizontalAlignment === 'right' && '0'};
	top: ${(p) => p.$style?.verticalAlignment === 'top' && '0'};
	bottom: ${(p) => p.$style?.verticalAlignment === 'bottom' && '0'};
	${(p) =>
		p.$style?.horizontalAlignment === 'center' &&
		'left: 50%; transform: translateX(-50%);'};

	// For centering:
	margin: ${(p) => {
		if (p.$style?.horizontalAlignment === 'center') return '0 auto';
		return '0';
	}};
`;

export const Panel = ({ style, widgets }: PanelProps) => {
	return (
		<PanelDiv $style={style}>
			{widgets.map((widget, index) => (
				<div key={index}>{widget.component}</div>
			))}
		</PanelDiv>
	);
};
