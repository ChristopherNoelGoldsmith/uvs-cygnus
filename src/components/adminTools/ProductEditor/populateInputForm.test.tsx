import React from "react";
import { createSelectorElement } from "./populateInputForm";
import { render, fireEvent, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
test("Expect select JSX component with options children.", () => {
	const testArray = ["Air", "Fire", "Water"];
	const testFn = () => {
		console.log("tested");
	};

	const theTest = createSelectorElement(testArray, testFn);

	expect(theTest).toBe("fudge");
});
