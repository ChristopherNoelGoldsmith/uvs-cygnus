import React from "react";
import ExpandableMenu from "../UI/ExpandableMenu";

const StatsSelector: React.FC = () => {
	return (
		<ExpandableMenu
			id={"details-stats"}
			name={"Stats"}
			height={"auto"}
			default="open"
		>
			<ul>
				<li>
					<label htmlFor="">Damage</label>
					<input type="number" name="" id="" />
				</li>
			</ul>
		</ExpandableMenu>
	);
};

export default StatsSelector;
