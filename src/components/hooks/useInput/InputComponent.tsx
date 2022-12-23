import React from "react";
import { InputComponentInterface } from "./interface-InputComponent";

const InputComponent = (props: InputComponentInterface) => {
	const classes = props.className.join(" ");
	return (
		<input
			type={props.type || "text"}
			className={classes}
			placeholder={props.placeholder}
			value={props.value}
			id={props.id}
			key={props.key}
		/>
	);
};

export default InputComponent;
