import "../CircleButton/CircleButton.css";
import type { CircleLinkButtonProps } from "./CircleLinkButtonProps";

const CircleLinkButton: React.FC<CircleLinkButtonProps> = (props) => {
	return (
		<a
			href={props.href}
			aria-label={props.ariaLabel}
			target="_blank"
			rel="noopener noreferrer"
			className={`circle-base ${props.variant}-button`}
			style={{ margin: "0 12px" }}
		></a>
	);
};

export default CircleLinkButton;
