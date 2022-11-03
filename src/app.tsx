import React from "react";
import ExpandableMenu from "./components/UI/ExpandableMenu";
import "./sass/app.scss";

const App = () => {
	return (
		<main className="fill">
			<nav className="fixed-top-left fill-x bg bg-color-white">
				<ul className="flex row-xs">
					<li>Profile</li>
					<li>Collection</li>
					<li>Decks</li>
				</ul>
			</nav>
			<section className="flex column-xs fill-x bg bg-color-red pad3">
				<form action="">
					<section id="main-info">
						<input type="text" placeholder="Name" />
						<input type="text" placeholder="Text" />
					</section>
					<section id="details-set">
						<ul>
							<li>My Hero</li>
							<li>Crimson Rampage</li>
						</ul>
					</section>

					<section id="details-color">
						<ul>
							<li>
								<label htmlFor="">Air</label>
								<input type="checkbox" name="" id="" value={"air"} />
							</li>
						</ul>
					</section>
					<section id="details-stats">
						<ul>
							<li>
								<label htmlFor="">Damage</label>
								<input type="number" name="" id="" />
							</li>
						</ul>
					</section>
					<ExpandableMenu
						id="types"
						name="Donkeh"
						className={["fill-4", "pad3"]}
					>
						<label htmlFor="">Punch</label>
						<input type="checkbox" name="" id="" value="punch" />
					</ExpandableMenu>

					<button type="submit">Search</button>
				</form>
			</section>
		</main>
	);
};

export default App;
