import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";
import CircleLinkButton from "./components/CircleLinkButton/CircleLinkButton";

function App() {
	return (
		<>
			<Header />
			<div className="content-wrapper">
				<main>
					<Presentation />
					<section className="contact-section">
						<CircleLinkButton></CircleLinkButton>
						<CircleLinkButton></CircleLinkButton>
						<CircleLinkButton></CircleLinkButton>
					</section>
				</main>
			</div>
		</>
	);
}

export default App;
