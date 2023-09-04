import { useState } from 'react';
import styled from 'styled-components';
import {
	useFloating,
	offset,
	flip,
	shift,
	useDismiss,
	useInteractions
} from '@floating-ui/react';
interface DropdownProps {
	children: JSX.Element;
	text: string;
}

const DropButton = styled.div`
	user-select: none;

	cursor: pointer;
	color: var(--primary-color);
	display: inline-block;
	margin: auto;
	white-space: nowrap;

	&:hover {
		border-radius: var(--borderRadius);
		background-color: rgba(128, 128, 128, 0.5);
	}
`;

const Dropdown = (props: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		middleware: [offset(4), flip(), shift()]
	});

	const dismiss = useDismiss(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
	return (
		<>
			<DropButton
				ref={refs.setReference}
				onClick={() => setIsOpen(!isOpen)}
				{...getReferenceProps()}>
				{props.text}
			</DropButton>
			{isOpen && (
				<div
					ref={refs.setFloating}
					style={floatingStyles}
					{...getFloatingProps()}>
					{props.children}
				</div>
			)}
		</>
	);
};

export default Dropdown;
