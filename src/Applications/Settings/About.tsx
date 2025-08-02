import Logo from "../../assets/img/LogoSideView.png";
import styles from "./Settings.module.css";

export const About = () => {
	return (
		<div className={styles.about}>
			<img src={Logo} alt="Logo" />
			<div>
				<span>Project</span>
				<span>Tranquility Desktop</span>
			</div>
		</div>
	);
};
