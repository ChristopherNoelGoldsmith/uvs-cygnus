import React from "react";
import ExpandableMenu from "../UI/ExpandableMenu";

const ProductSelector: React.FC = () => {
	return (
		<ExpandableMenu id="details-set" name="Sets" height={300}>
			<ul>
				<li>My Hero</li>
				<li>Crimson Rampage</li>
			</ul>
		</ExpandableMenu>
	);
};

export default ProductSelector;
