import React from "react";
import "@testing-library/jest-dom";
import populateInputForm, {
	createSelectorElement,
	InputFormInterface,
} from "./populateInputForm";
import { render, fireEvent, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";

//Test for text in a string or array of values on screen
type middlewareType = (str: string | number) => string | number;
export const testForTextOnTheScreen = async (
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
	const theTest = createSelectorElement(testArray, () => console.log("test"));
	render(theTest);
	const makeUppercase = (str: string | number): string | number => {
		//!workaround fix this!
		if (typeof str === "string") return str.toUpperCase();
		return 0;
	};
	const result = await testForTextOnTheScreen(testArray, makeUppercase);

	expect(result).toBeTruthy();
});

test("Expect form with series of inputs", async () => {
	const testData: InputFormInterface = { test: "testing text", test2: 2 };
	const theTest: React.ReactElement = (
		<div key={Math.random() * 1000000}>
			{populateInputForm(testData, () => console.log("fart"))}
		</div>
	);
	render(theTest);
	const result = await testForTextOnTheScreen("Test");
	expect(result).toBeTruthy();
});
