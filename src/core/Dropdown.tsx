import { useState } from 'react'
import useOnclickOutside from "react-cool-onclickoutside";
import styled from "styled-components";

interface DropdownProps {
    children: JSX.Element;
    text: string;
}

const MenubarDropdown = styled.div`
  float: left;
  user-select: none;
  text-decoration: none;
  cursor: pointer;

  >* {
    padding-right: 5px;
    color: var(--primary-color);
  }
`

const Dropdown = (props: DropdownProps) => {
    const [expanded, setExpanded] = useState(false);

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    const ref = useOnclickOutside(() => setExpanded(false));

    return (
        <MenubarDropdown ref={ref}>
            <p onClick={toggleExpanded} >{props.text}</p>
            {expanded ? props.children : null}
        </MenubarDropdown>
    )
}

export default Dropdown;