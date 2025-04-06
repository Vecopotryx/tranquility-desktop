import { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

export const InlineClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return (
		<Dropdown
			text={`${months[time.getMonth()]} ${time.getDate()} ${time.toLocaleTimeString(
				[],
				{
					hour: "2-digit",
					minute: "2-digit",
				},
			)}`}
		>
			<div>
				<h3 style={{ display: "inline" }}>
					{time.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
						second: "2-digit",
					})}
				</h3>
				<br />
				<span>
					{days[time.getDay()]} {months[time.getMonth()]} {time.getDate()}{" "}
					{time.getFullYear()}
				</span>
			</div>
		</Dropdown>
	);
};
