/**
 * @jest-environment jsdom
 */

import React, { useState } from "react";
import renderer from "react-test-renderer";
import { renderHook } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import useInput from "./useInput";
import { InputHandlerInterface } from "./interface-InputComponent";

// const setupFunction = () => {
// 	console.log(result);
// 	//	return { inputState, inputHandler };
// };

test("useInput: 2 strings added to use input state", () => {
	renderHook(() => useState(null));

	//	inputHandler({ fart: "stinks", fire: "hot" });
});
