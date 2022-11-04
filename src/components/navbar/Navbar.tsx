import "./Navbar.scss";
import React from "react";
import TypesSelector from "../selections/TypesSelector";
import ProductSelector from "../selections/ProductSelector";
import ColorSelector from "../selections/ColorSelector";
import StatsSelector from "../selections/StatsSelector";
import ExpandableMenu from "../UI/ExpandableMenu";

const Navbar: React.FC = () => {
	return (
		<nav className="flex row fixed-top-left fill-x bg bg-color-white layer-top">
			<ul className="flex row gap-2 start pad1">
				<li>News</li>
				<li>Profile</li>
				<li>Collection</li>
				<li>Decks</li>
			</ul>
			<section className="flex row">
				<form className="flex row" action="">
					<section id="main-info">
						<input type="text" placeholder="Name" />
					</section>
					<ExpandableMenu
						height={500}
						name={"Advanced"}
						className={["layer-front"]}
					>
						<input type="text" placeholder="Text" />
						<ProductSelector />
						<ColorSelector />
						<StatsSelector />
						<TypesSelector />
					</ExpandableMenu>
					<button type="submit">Search</button>
				</form>
			</section>
		</nav>
	);
};

export default Navbar;
