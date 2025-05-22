import Header from "./components/Header/Header";
import Presentation from "./components/Presentation/Presentation";

function App() {
	return (
		<>
			<Header />
			<div className="content-wrapper">
				<main>
					<Presentation />
					<section className="contact-section"></section>
				</main>
			</div>
		</>
	);
}

export default App;
