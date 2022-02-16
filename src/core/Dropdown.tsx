import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts';
import "../assets/styles/componentStyles/Menubar.css";

interface DropdownProps {
    children: JSX.Element;
    text: string;
}

const Dropdown = ({ children, text }: DropdownProps) => {
    const [expanded, setExpanded] = useState(false);
    const ref = useRef(null)

    function toggleExpanded() {
        setExpanded(!expanded);
    }

    const handleClickOutside = () => {
        setExpanded(false);
    }

    useOnClickOutside(ref, handleClickOutside);

    return (
        <div className="menubarDropdown" ref={ref}>
            <p onClick={toggleExpanded} >{text}</p>
            {expanded ? children : null}
        </div>
    )
}

export default Dropdown