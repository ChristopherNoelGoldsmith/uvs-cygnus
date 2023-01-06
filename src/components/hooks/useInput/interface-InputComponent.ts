import React from "react";

export interface InputComponentInterface {
	type?: string;
	className?: string[];
	placeholder?: string;
	value?: number | string;
	id?: string;
	inputName?: string;
	key: string;
	middleware?: Function;
	readOnly?: boolean;
	onChange?: React.ChangeEventHandler;
}

export interface InputHandlerInterface {
	[key: string]: string | number | string[];
}
