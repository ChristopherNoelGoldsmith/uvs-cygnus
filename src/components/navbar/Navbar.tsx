import "./Navbar.scss";
//HOOKS
import React, { ChangeEvent, useState } from "react";
import useInput from "../hooks/useInput";
//COMPONENTS
import TypesSelector from "../selections/TypesSelector";
import ProductSelector from "../selections/ProductSelector";
import ColorSelector from "../selections/ColorSelector";
import StatsSelector from "../selections/StatsSelector";

const Navbar: React.FC = () => {
	const [advVis, setAdvVis] = useState<boolean>(true);
	const { inputHandler, inputState } = useInput({ name: "" });

	const advVisHandler = (event: React.MouseEvent, boo?: boolean): void => {
		if (boo === true) setAdvVis(true);
		if (boo === false) {
			setAdvVis(false);
		} else {
			setAdvVis((vis) => !vis);
		}
	};

	const navbarInputHandler = (event: any): void => {
		inputHandler({ name: event.target.value });
	};

	return (
		<nav className="flex column fixed-top-left fill-x bg bg-color-white layer-top">
			<section id="nav-main" className="flex row">
				<ul className="flex row gap-2 start pad1">
					<li>News</li>
					<li>Profile</li>
					<li>Collection</li>
					<li>Decks</li>
				</ul>
				<section className="flex row">
					<form className="flex row" action="">
						<section id="main-info">
							<input
								type="text"
								placeholder="Name"
								value={inputState.navbar}
								onChange={navbarInputHandler}
							/>
							<input type="text" placeholder="Text" />
						</section>
						<button type="submit">Search</button>
						<button type="button" onClick={advVisHandler}>
							Advanced
						</button>
					</form>
				</section>
			</section>
			<section className={`flex row layer-front ${advVis && "hidden"}`}>
				<ProductSelector />
				<ColorSelector />
				<StatsSelector />
				<TypesSelector />
			</section>
		</nav>
	);
};

export default Navbar;
