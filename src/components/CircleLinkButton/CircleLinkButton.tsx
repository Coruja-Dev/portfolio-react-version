import "../CircleButton/CircleButton.css";
import LinkedInLogo from "../../assets/linkedin_icon.svg?react";

const CircleLinkButton = () => {
	return (
		<a
			href="https://www.linkedin.com/in/damasceno-guilherme/"
			aria-label="Check my LinkedIn"
			target="_blank"
			rel="noopener noreferrer"
			className="circle-base dark-button"
			style={{ margin: "0 12px" }}
		>
			<LinkedInLogo
				role="img"
				aria-labelledby="logoTitle logoDesc"
				className="inner-logo"
			></LinkedInLogo>
		</a>
	);
};

export default CircleLinkButton;
