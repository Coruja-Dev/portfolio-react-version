import "./Presentation.css";
import { useEffect, useState } from "react";
import OwlLogo from "../../assets/coruja.svg?react";

const titleList = ["Frontend", "Fullstack", "Web3"];

const Presentation = () => {
	const [currentTitle, updateTitle] = useState("Frontend");
	const changeTitle = () => {
		if (titleList.indexOf(currentTitle) === 2) {
			updateTitle(titleList[0]);
			return;
		}

		updateTitle(titleList[titleList.indexOf(currentTitle) + 1]);
	};

	useEffect(() => {
		setTimeout(() => {
			changeTitle();
		}, 3000);
	}, [currentTitle]);
	return (
		<section className="presentation-section">
			<div className="text-box">
				<div className="line line1">
					<h2 className="text-auxiliary">Hi, I'm </h2>
					<h2 className="text-secondary">Guilherme Damasceno</h2>
					<h2 className="text-auxiliary">,</h2>
				</div>
				<div className="line line2">
					<h2 className="text-tertiary animated-title" key={currentTitle}>
						{currentTitle}{" "}
					</h2>
					<h2 className="text-secondary">Developer</h2>
				</div>
				<div className="line line3">
					<h2 className="text-secondary">&</h2>
				</div>
				<div className="line line4">
					<h2 className="text-secondary">Project Manager</h2>
				</div>
			</div>
			<div><OwlLogo
					role="img"
					aria-labelledby="logoTitle logoDesc"
					className="owl-logo-big"
					style={{ fill: "var(--color-secondary-standard)" }}
				></OwlLogo></div>
		</section>
	);
};

export default Presentation;
