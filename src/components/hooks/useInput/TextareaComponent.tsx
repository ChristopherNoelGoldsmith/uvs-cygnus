import React from "react";
import { InputComponentInterface } from "./interface-InputComponent";

const TextareaComponent = (props: InputComponentInterface) => {
	const classes = props.className.join(" ");
	return (
		<textarea
			className={classes}
			placeholder={props.placeholder}
			value={props.value}
			id={props.id}
			key={props.key}
			cols={20}
			rows={10}
		/>
	);
};

export default TextareaComponent;
