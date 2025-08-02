import { useState } from "react";
import icon from "../../assets/img/icons/browser.png";
import loadingSpinner from "../../assets/img/tail-spin.svg";
import type { Application } from "../AppManagerStore";
import styles from "./Browser.module.css";

const YearOptions = () => {
	const years: number[] = [];
	for (let i = 1995; i <= 2025; i++) {
		years.push(i);
	}

	return (
		<>
			{years.map((year) => (
				<option value={year} key={year}>
					{year}
				</option>
			))}
		</>
	);
};

const Browser = () => {
	const [year, setYear] = useState(2016);
	const [site, setSite] = useState("https://www.google.com");
	const [loading, setLoading] = useState(true);
	const [frameSource, setFrameSource] = useState(
		"https://web.archive.org/web/20160101012000/https://www.google.com/",
	);

	const updateIframe = () => {
		const newSource = `https://web.archive.org/web/${year}0101012000/${site}`;
		if (newSource === frameSource) return;
		setFrameSource(newSource);
		setLoading(true);
	};

	return (
		<div className={styles.browserContainer}>
			<div className={styles.controls}>
				<label>
					Year:
					<select
						value={year}
						onChange={(e) => setYear(Number(e.target.value))}
					>
						<YearOptions />
					</select>
				</label>
				<input
					type="text"
					placeholder="Enter address"
					value={site}
					onChange={(e) => setSite(e.target.value)}
					onKeyUp={(e) => {
						if (e.key === "Enter") updateIframe();
					}}
				/>
				<button
					type="button"
					onClick={() => updateIframe()}
					disabled={site === ""}
				>
					Go
				</button>
				{loading && (
					<span>
						<img
							className="loadingSpinner"
							src={loadingSpinner}
							alt="Loading"
							height={12}
						/>
						{"Retrieving data from "}
						<a
							href="https://archive.org/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Archive.org
						</a>
					</span>
				)}
			</div>

			<iframe
				title="Web Archive Browser"
				src={frameSource}
				width="100%"
				height="100%"
				onLoad={() => setLoading(false)}
			>
				<p>Your browser does not support iframes.</p>
			</iframe>
		</div>
	);
};

export const BrowserApp: Application = {
	title: "Browser",
	icon: icon,
	type: "component",
	component: <Browser />,
};
