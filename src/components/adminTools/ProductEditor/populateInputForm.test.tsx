import React from "react";
import "@testing-library/jest-dom";
import { createSelectorElement } from "./populateInputForm";
import { render, fireEvent, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";

//Test for text in a string or array of values on screen
type middlewareType = (str: string | number) => string | number;
const testForTextOnTheScreen = async (
	text: string[] | string | number | number[],
	middleware?: middlewareType
) => {
	let result = true;

	if (typeof text === "string" || typeof text === "number") {
		if (middleware) text = middleware(text);
		const testIt = await screen.findAllByText(text);
		if (!testIt) result = false;
	} else {
		const testIt = text.map(async (arr: any) => {
			if (middleware) arr = middleware(arr);
			const text = await screen.findAllByText(arr);
			if (!text) result = false;
		});

		await Promise.all(testIt).then((res) => res);
	}

	return result;
};

test("Expect select JSX component with options children with specific text.", async () => {
	const testArray: string[] = ["Air", "Fire", "Water"];
	const testFn = () => console.log("hello");
	const theTest = createSelectorElement(testArray, testFn);
	render(theTest);
	const makeUppercase = (string: string) => {
		return string.toUpperCase();
	};
	const result = await testForTextOnTheScreen(testArray);

	expect(result).toBe(true);
});
