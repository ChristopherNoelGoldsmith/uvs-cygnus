import React from "react";
import ExpandableMenu from "../UI/ExpandableMenu";

const TypesSelector: React.FC = () => {
	return (
		<ExpandableMenu id={"types"} name={"Types"} height={"auto"}>
			<label htmlFor="">Punch</label>
			<input type="checkbox" name="" id="" value="punch" />
		</ExpandableMenu>
	);
};

export default TypesSelector;
