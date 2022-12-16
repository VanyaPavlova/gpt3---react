import {
	Blog,
	Features,
	Footer,
	Header,
	Possibility,
	WhatGPT3,
} from "./containers";
import "./App.css";

import { CTA, Brand, Navbar } from "./components";

function App() {
	return (
		<>
			<section className="gradient__bg">
				<Navbar />
				<Header />
			</section>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</>
	);
}

export default App;
