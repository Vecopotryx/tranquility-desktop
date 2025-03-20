import { useEffect, useState } from "react";

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
		<div>
			{`${months[time.getMonth()]} ${time.getDate()} ${time.toLocaleTimeString(
				[],
				{
					hour: "2-digit",
					minute: "2-digit",
				},
			)}`}
		</div>
	);
};
