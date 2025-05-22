import "./Header.css";

import OwlLogo from "../../assets/coruja.svg?react";

const testCSS = {
	backgroundColor: "#fff",
};

const Header = () => {
	return (
		<header>
			<div className="header-container">
				<OwlLogo
					role="img"
					aria-labelledby="logoTitle logoDesc"
					className="owl-logo"
					style={{ fill: "var(--color-secondary-standard)" }}
				></OwlLogo>
				<div style={testCSS}>box2</div>
			</div>
		</header>
	);
};

export default Header;
