import React, { useState } from "react";
import SelectComponent from "./SelectComponent";
import InputComponent from "./InputComponent";

const SelectComponentMulti = (props: any): React.ReactElement => {
	const selectComp = (
		<SelectComponent
			optionsArray={props.optionsArray}
			selectId={"attribute"}
			selectClassName={["fake"]}
			selectName={"attribute"}
			//onChange={props.onChange}
			key={Math.random() * 100000}
		/>
	);
	const [selectCompArr, setComps] = useState<React.ReactElement[]>([
		selectComp,
	]);

	const addSelectComponent = (event: any): void => {
		setComps((comp: React.ReactElement[]) => {
			comp = [...comp, selectComp];
			return comp;
		});
	};

	return (
		<figure>
			{selectCompArr}
			<button type={"button"} onClick={addSelectComponent}>
				{"Add"}
			</button>
		</figure>
	);
};

export default SelectComponentMulti;
