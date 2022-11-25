import { useReducer } from "react";

/*
///////////////////////////////
CONTROLS THE STATE OF THE INPUT
///////////////////////////////
*/

interface inputHandlerInterface {
	[key: string]: string;
}

const inputReducer = (
	state: inputHandlerInterface,
	action: inputHandlerInterface
) => {
	const [keys] = Object.keys(action);

	if (state[keys]) {
		state[keys] = action[keys];
	} else {
		state = { ...state, ...action };
	}
	console.log(state);
	return { ...state };
};

const useInput = (input: inputHandlerInterface) => {
	const [inputState, dispatchInput] = useReducer(inputReducer, input && {});

	/*--------------------------------------------------------------------
    WHEN CREATING A FORM OR SERIES OF INPUTS YOU CAN PICK HANDLERS FROM THIS COMPONENT
    AND UTILIZE THE STATE RETURNED VIA "inputState" TO HANDLE ACTIONS IN THE DOM

    TO ADD MORE HANDLERS ADD A HANDLER BELOW AND PLUG IN THE VALUES INTO THE REDUCER ABOVE.
    FOLLOW THE STANDARDS OF THE OTHER HANDLERS!
    */ //------------------------------------------------------------------

	const inputHandler = (input: inputHandlerInterface): void => {
		dispatchInput(input);
	};

	return {
		inputState,
		inputHandler,
	};
};

export default useInput;
