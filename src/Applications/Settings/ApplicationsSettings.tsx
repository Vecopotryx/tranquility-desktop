import { useAppManagerStore } from "../AppManagerStore";
import { defaultApps } from "../DefaultApps";
import styles from "./Settings.module.css";

export const ApplicationsSettings = () => {
	const list = useAppManagerStore((state) => state.apps);
	const removedDefaults = defaultApps.filter((obj) => !list.includes(obj));
	const addApp = useAppManagerStore((state) => state.addApp);
	const removeApp = useAppManagerStore((state) => state.removeApp);

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
						<tr key={app.title}>
							<td
								style={{ display: "flex", alignItems: "center", gap: "0.25em" }}
							>
								<img src={app.icon} alt="" style={{ height: "1em" }} />
								{app.title}
							</td>
							<td>{app.type === "component" ? "Built-in" : "External"}</td>
							<td>
								<button onClick={() => removeApp(app)} type="button">
									Remove
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{removedDefaults.length > 0 ? (
				<>
					Removed defaults:
					<table>
						<tbody>
							{removedDefaults.map((app) => (
								<tr key={app.title}>
									<td
										style={{
											display: "flex",
											alignItems: "center",
											gap: "0.25em",
										}}
									>
										<img src={app.icon} alt="" style={{ height: "1em" }} />
										{app.title}
									</td>
									<td>{app.type === "component" ? "Built-in" : "External"}</td>
									<td>
										<button onClick={() => addApp(app)} type="button">
											Add
										</button>
									</td>
								</tr>
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
