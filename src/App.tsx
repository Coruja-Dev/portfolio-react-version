import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

import "./styles/Presentation.css";

const titleList = ["Frontend", "Fullstack", "Web3"];

function App() {
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
		<>
			<Header />
			<div className="content-wrapper">
				<main>
					<section className="presentation-section">
						<div className="text-box">
							<div className="line line1">
								<h1 className="text-auxiliary">Hi, I'm </h1>
								<h1 className="text-secondary">Guilherme Damasceno</h1>
								<h1 className="text-auxiliary">,</h1>
							</div>
							<div className="line line2">
								<h1 className="text-tertiary animated-title" key={currentTitle}>
									{currentTitle}{" "}
								</h1>
								<h1 className="text-secondary">Developer</h1>
							</div>
							<div className="line line3">
								<h1 className="text-secondary">&</h1>
							</div>
							<div className="line line4">
								<h1 className="text-secondary">Project Manager</h1>
							</div>
						</div>
						<div>logo</div>
					</section>
					<section className="contact-section"></section>
				</main>
			</div>
		</>
	);
}

export default App;
