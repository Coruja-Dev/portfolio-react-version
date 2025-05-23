import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import CircleLinkButton from "./components/CircleLinkButton/CircleLinkButton";
import LinkedInLogo from "./assets/linkedin_icon.svg?react";

function App() {
	return (
		<>
			<Header />
			<div className="content-wrapper">
				<main>
					<Presentation />
					<section className="contact-section">
						<CircleLinkButton
							href="https://www.linkedin.com/in/damasceno-guilherme/"
							ariaLabel="Check my LinkedIn"
							variant="dark"
						>
							<LinkedInLogo
								role="img"
								aria-labelledby="logoTitle logoDesc"
								className="inner-logo"
							></LinkedInLogo>
						</CircleLinkButton>
						{/* <CircleLinkButton></CircleLinkButton>
						<CircleLinkButton></CircleLinkButton> */}
					</section>
				</main>
			</div>
		</>
	);
}

export default App;
