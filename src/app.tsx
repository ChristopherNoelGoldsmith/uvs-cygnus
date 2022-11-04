import React from "react";
import Navbar from "./components/navbar/Navbar";
import ProductSelector from "./components/selections/ProductSelector";
import ColorSelector from "./components/selections/ColorSelector";
import TypesSelector from "./components/selections/TypesSelector";
import StatsSelector from "./components/selections/StatsSelector";
import SearchResults from "./components/list/SearchResults";
import "./sass/app.scss";

const App = () => {
	return (
		<main className="flex column fill">
			<Navbar />
			<SearchResults />
		</main>
	);
};

export default App;
