import { type Application, useAppManagerStore } from "../AppManagerStore";
import { defaultApps } from "../DefaultApps";
import styles from "./Settings.module.css";

const ApplicationRow = ({
	app,
	isRemoved,
}: { app: Application; isRemoved: boolean }) => {
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
							<a href={app.attribution} target="_blank" rel="noreferrer">
								Repo
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
						<th />
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
