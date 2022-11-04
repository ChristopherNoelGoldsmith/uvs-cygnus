import React from "react";
import ExpandableMenu from "../UI/ExpandableMenu";

const ColorSelector: React.FC = () => {
	return (
		<ExpandableMenu id="details-color" name="Details Color" height={350}>
			<ul>
				<li>
					<label htmlFor="">Air</label>
					<input type="checkbox" name="" id="" value={"air"} />
				</li>
			</ul>
		</ExpandableMenu>
	);
};

export default ColorSelector;
