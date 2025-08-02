import styles from "./Settings.module.css";

const BackgroundButton = ({
	background,
	updateBackground,
}: {
	background: string;
	updateBackground: (value: string) => void;
}) => {
	return (
		<button
			className={styles.backgroundButton}
			style={{ backgroundImage: `url(${background})` }}
			type="button"
			onClick={() => updateBackground(background)}
		/>
	);
};

export const Background = () => {
	const updateBackground = (value: string) => {
		document.documentElement.style.setProperty(
			"--background-image",
			`url(${value})`,
		);
	};

	const onImageChange = (event: { target: HTMLInputElement }) => {
		console.log(event.target.files);
		if (event.target.files?.[0]) {
			const newImage = URL.createObjectURL(event.target.files[0]);
			document.documentElement.style.setProperty(
				"--background-image",
				`url(${newImage})`,
			);
		}
	};
	return (
		<div>
			<div className={styles.backgroundContainer}>
				<BackgroundButton
					background="https://images.unsplash.com/photo-1589642314445-999ac13b0075?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
					updateBackground={updateBackground}
				/>
				<BackgroundButton
					background="https://images.unsplash.com/photo-1622307053412-5404f0c427c0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
					updateBackground={updateBackground}
				/>
				<BackgroundButton
					background="https://images.unsplash.com/photo-1610295409812-12d71b4aa1dd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
					updateBackground={updateBackground}
				/>
				<BackgroundButton
					background="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb"
					updateBackground={updateBackground}
				/>
			</div>
			<label>
				Upload from computer: <input type="file" onChange={onImageChange} />
			</label>
		</div>
	);
};
