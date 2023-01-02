import React, { ChangeEventHandler } from "react";

export interface OptionComponentInterface {
	id: string;
	label: string;
	value: string;
	className: string[];
	key: number;
}

export interface SelectComponentInterface {
	selectName: string;
	selectId: string;
	selectClassName: string[];
	onChange: ChangeEventHandler;
	optionsArray: OptionComponentInterface[];
	key: number;
}

const SelectComponent = (props: SelectComponentInterface) => {
	const createOptions = () => {
		return props.optionsArray.map((opt: OptionComponentInterface) => {
			return (
				<option
					value={opt.value}
					className={opt.className.join(" ")}
					id={opt.id}
					key={opt.key}
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
			key={Math.random() * 500}
		>
			{options}
		</select>
	);
};

export default SelectComponent;
