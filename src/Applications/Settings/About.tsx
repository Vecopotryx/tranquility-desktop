import { BsGithub } from "react-icons/bs";
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
			<span>
				<BsGithub />{" "}
				<a
					href="https://github.com/vecopotryx/tranquility-desktop"
					target="_blank"
					rel="noopener noreferrer"
				>
					GitHub Repository
				</a>
			</span>
		</div>
	);
};
