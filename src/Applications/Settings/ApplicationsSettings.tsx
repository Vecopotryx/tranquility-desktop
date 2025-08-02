import {
	offset,
	useDismiss,
	useFloating,
	useInteractions,
} from "@floating-ui/react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { type Application, useAppManagerStore } from "../AppManagerStore";
import { defaultApps } from "../DefaultApps";
import styles from "./Settings.module.css";

const ApplicationRow = ({
	app,
	isRemoved,
}: {
	app: Application;
	isRemoved: boolean;
}) => {
	const removeApp = useAppManagerStore((state) => state.removeApp);
	const addApp = useAppManagerStore((state) => state.addApp);

	return (
		<tr key={app.title}>
			<td style={{ width: "50%" }}>
				<div style={{ display: "flex", alignItems: "center", gap: "0.25em" }}>
					<img src={app.icon} alt="" style={{ height: "1em" }} />
					{app.title}
				</div>
			</td>
			<td style={{ width: "50%" }}>
				{app.type === "component" ? (
					"Built-in"
				) : (
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						External
						{app.attribution && (
							<a
								href={app.attribution}
								target="_blank"
								rel="noreferrer"
								className={styles.attributionLink}
							>
								<BsGithub />
							</a>
						)}
					</div>
				)}
			</td>
			<td>
				<button
					onClick={() => (isRemoved ? addApp(app) : removeApp(app))}
					type="button"
				>
					{isRemoved ? "+" : "-"}
				</button>
			</td>
		</tr>
	);
};

const AddAppPopup = () => {
	const addApp = useAppManagerStore((state) => state.addApp);

	const [isOpen, setIsOpen] = useState(false);
	const [url, setUrl] = useState("");
	const [title, setTitle] = useState("");

	const handleURLInput = (event: { target: HTMLInputElement }) => {
		setUrl(event.target.value);
	};

	const handleTitleInput = (event: { target: HTMLInputElement }) => {
		setTitle(event.target.value);
	};

	const assembleApp = (): Application => {
		const link = url.indexOf("://") === -1 ? `https://${url}` : url;
		const hostname = new URL(link).hostname;
		const icon = `https://s2.googleusercontent.com/s2/favicons?domain=${hostname}`;
		setIsOpen(false);
		return { title, icon, type: "iframe", url: link };
	};

	const onAdd = () => {
		if (url !== "" || title !== "") {
			addApp(assembleApp());
		}
	};

	const { refs, floatingStyles, context } = useFloating({
		open: isOpen,
		onOpenChange: setIsOpen,
		placement: "bottom-end",
		middleware: [offset(4)],
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
				+
			</button>
			{isOpen && (
				<div
					ref={refs.setFloating}
					style={floatingStyles}
					{...getFloatingProps()}
					className={styles.addAppPopup}
				>
					<div>
						<h4 style={{ display: "inline" }}>Add application</h4>
						<br />
						<label>
							Title:
							<input
								type="text"
								onChange={handleTitleInput}
								onKeyUp={(e) => {
									if (e.key === "Enter") onAdd();
								}}
							/>
						</label>
						<br />
						<label>
							URL:
							<input
								type="text"
								onChange={handleURLInput}
								onKeyUp={(e) => {
									if (e.key === "Enter") onAdd();
								}}
							/>
						</label>
						<br />
						<button style={{ width: "100%" }} type="button" onClick={onAdd}>
							Add
						</button>
						<br />
						<span style={{ fontSize: "90%" }}>
							Note that many websites block being embedded and might therefore
							not work in Tranquility Desktop.
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export const ApplicationsSettings = () => {
	const list = useAppManagerStore((state) => state.apps);
	const removedDefaults = defaultApps.filter((obj) => !list.includes(obj));

	return (
		<div className={styles.applicationsSettings}>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Type</th>
						<th>
							<AddAppPopup />
						</th>
					</tr>
				</thead>
				<tbody>
					{list.map((app) => (
						<ApplicationRow key={app.title} app={app} isRemoved={false} />
					))}
				</tbody>
			</table>
			{removedDefaults.length > 0 ? (
				<>
					Removed defaults:
					<table>
						<tbody>
							{removedDefaults.map((app) => (
								<ApplicationRow key={app.title} app={app} isRemoved={true} />
							))}
						</tbody>
					</table>
				</>
			) : (
				""
			)}
		</div>
	);
};
