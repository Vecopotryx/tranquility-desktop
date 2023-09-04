import { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import styled from 'styled-components';

interface DropdownProps {
	children: JSX.Element;
	text: string;
}

const MenubarDropdown = styled.div`
	user-select: none;

	> p {
		cursor: pointer;
		color: var(--primary-color);
		display: inline-block;
		margin: auto;
		white-space: nowrap;

		&:hover {
			border-radius: var(--borderRadius);
			background-color: rgba(128, 128, 128, 0.5);
		}
	}
`;

const Dropdown = (props: DropdownProps) => {
	const [expanded, setExpanded] = useState(false);

	function toggleExpanded() {
		setExpanded(!expanded);
	}

	const ref = useOnclickOutside(() => setExpanded(false));

	return (
		<MenubarDropdown ref={ref}>
			<p onClick={toggleExpanded}>{props.text}</p>
			{expanded ? props.children : null}
		</MenubarDropdown>
	);
};

export default Dropdown;
