import { useReducer } from "react";
import { InputHandlerInterface } from "./interface-InputComponent";
/*
///////////////////////////////
CONTROLS THE STATE OF THE INPUT
///////////////////////////////
*/

const stateConversion = (
	obj: InputHandlerInterface,
	conversionFunction: Function
) => {
	const keys: string[] = Object.keys(obj);
	let list = {};
	keys.forEach((objKey: string, index: number) => {
		return (list = { ...list, [keys[index]]: conversionFunction(obj[objKey]) });
	});
	console.log(list);
	return { ...list };
};

const inputReducer = (
	state: InputHandlerInterface,
	action: InputHandlerInterface
) => {
	const [keys] = Object.keys(action);

	if (state[keys]) {
		state[keys] = action[keys];
	} else {
		state = { ...state, ...action };
	}
	console.log(state, action);
	return { ...state };
};

const useInput = (
	input: InputHandlerInterface,
	conversionFunction?: Function
) => {
	const [inputState, dispatchInput] = useReducer(inputReducer, input && {});

	/*--------------------------------------------------------------------
    WHEN CREATING A FORM OR SERIES OF INPUTS YOU CAN PICK HANDLERS FROM THIS COMPONENT
    AND UTILIZE THE STATE RETURNED VIA "inputState" TO HANDLE ACTIONS IN THE DOM

    TO ADD MORE HANDLERS ADD A HANDLER BELOW AND PLUG IN THE VALUES INTO THE REDUCER ABOVE.
    FOLLOW THE STANDARDS OF THE OTHER HANDLERS!
    */ //------------------------------------------------------------------

	const inputHandler = (input: InputHandlerInterface): void => {
		dispatchInput(input);
		console.log(inputState);
	};

	/* ------------------------------------------------------------------
	Convers the values in the inputState to conform to whatever values needed.
	A callback function is to be used upon calling the useInput hool which will be
	applied to the state and returned once called.
	------------------------------------------------------------------ */
	const convertedValues = (): InputHandlerInterface | void => {
		if (!conversionFunction) return;
		return stateConversion(inputState, conversionFunction);
	};
	return {
		inputState,
		inputHandler,
		convertedValues,
	};
};

export default useInput;
