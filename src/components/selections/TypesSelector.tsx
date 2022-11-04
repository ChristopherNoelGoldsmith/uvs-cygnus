import React from "react";
import ExpandableMenu from "../UI/ExpandableMenu";

const TypesSelector: React.FC = () => {
	return (
		<ExpandableMenu id={"types"} name={"Types"} height={300}>
			<label htmlFor="">Punch</label>
			<input type="checkbox" name="" id="" value="punch" />
		</ExpandableMenu>
	);
};

export default TypesSelector;
