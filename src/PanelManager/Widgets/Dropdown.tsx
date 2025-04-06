import {
	flip,
	offset,
	shift,
	useDismiss,
	useFloating,
	useInteractions,
} from "@floating-ui/react";
import { type JSX, useState } from "react";
import styles from "../Panel.module.css";

interface DropdownProps {
	children: JSX.Element;
	text: string;
}

export const Dropdown = (props: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: "bottom-end",
		middleware: [offset(4), flip(), shift()],
	});

	const dismiss = useDismiss(context);

	const { getReferenceProps, getFloatingProps } = useInteractions([dismiss]);
	return (
		<>
			<button
				ref={refs.setReference}
				onClick={() => setIsOpen(!isOpen)}
				{...getReferenceProps()}
			>
				{props.text}
			</button>
			{isOpen && (
				<div
					ref={refs.setFloating}
					style={floatingStyles}
					{...getFloatingProps()}
					className={styles.dropdown}
				>
					{props.children}
				</div>
			)}
		</>
	);
};
