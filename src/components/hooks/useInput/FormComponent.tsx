import React from "react";
import useInput from "./useInput";
import useQuery from "../useQuery";
import { InputHandlerInterface } from "./interface-InputComponent";

/*---------------------------------------------------------------- 
FormComponent - Description )

All values held in the form are contained in @inputState.

# Directions - Manual ) 
    Plug in values with the provided components (Input, Select, ect);
    You may also use custom components as children.
----------------------------------------------------------------*/

interface FormComponentInterface {
	children: JSX.Element;
	onSubmit: React.FormEventHandler;
	className: string[];
	auto?: boolean;
}

const FormComponent = (props: FormComponentInterface) => {
	return <form onSubmit={props.onSubmit}>{props.children}</form>;
};

export default FormComponent;
