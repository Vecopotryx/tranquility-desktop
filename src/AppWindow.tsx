import { Rnd } from "react-rnd";

export const AppWindow = () => {
	return (
		<Rnd style={{ backgroundColor: "lightgray" }}>
			<div>
				<button type="button">x</button>
				Essence Reader
			</div>
			<iframe
				title="hello"
				height="100%"
				width="100%"
				src="https://essence-reader.pages.dev/"
				style={{ border: "none" }}
			/>
		</Rnd>
	);
};
