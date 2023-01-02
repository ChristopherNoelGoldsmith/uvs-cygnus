import React from "react";
import "@testing-library/jest-dom";
import { createSelectorElement } from "./populateInputForm";
import { render, fireEvent, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
test("Expect select JSX component with options children.", async () => {
	const testArray: string[] = ["Air", "Fire", "Water"];
	const testFn = () => {
		console.log("tested");
	};
	let result = true;
	const theTest = createSelectorElement(testArray, testFn);
	const rendered = render(theTest);

	const testEachVariable = testArray.map(async (arr: any) => {
		const text = await screen.findAllByText(arr.toUpperCase());
		if (!text) result = false;
	});

	await Promise.all(testEachVariable).then((res) => res);

	expect(result).toBe(true);
});
