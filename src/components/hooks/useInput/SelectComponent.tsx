import React, { ChangeEventHandler } from "react";

export interface OptionComponentInterface {
	id: string;
	label: string;
	value: string;
	className: string[];
}

export interface SelectComponentInterface {
	selectName: string;
	selectId: string;
	selectClassName: string[];
	onChange: ChangeEventHandler;
	optionsArray: OptionComponentInterface[];
}

const SelectComponent = (props: SelectComponentInterface) => {
	const createOptions = () => {
		return props.optionsArray.map((opt: OptionComponentInterface) => {
			return (
				<option
					value={opt.value}
					className={opt.className.join(" ")}
					id={opt.id}
				>
					{opt.label.toUpperCase()}
				</option>
			);
		});
	};

	const options = createOptions();

	return (
		<select
			name={props.selectName}
			id={props.selectId}
			onChange={props.onChange}
		>
			{options}
		</select>
	);
};

export default SelectComponent;
