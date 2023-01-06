import React from "react";
import { InputComponentInterface } from "./interface-InputComponent";

const InputComponent = (props: InputComponentInterface) => {
	const classes: string = props.className ? props.className.join(" ") : "";
	return (
		<input
			type={props.type || "text"}
			className={classes}
			placeholder={props.placeholder}
			value={props.value}
			id={props.id}
			key={props.key}
			name={props.inputName}
			onChange={props.onChange}
			readOnly={props.readOnly && false}
		/>
	);
};

export default InputComponent;
