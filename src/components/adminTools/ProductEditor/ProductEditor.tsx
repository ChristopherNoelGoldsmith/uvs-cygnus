import React, { useState, useEffect, FormEvent } from "react";
import useQuery from "../../hooks/useQuery";
import useInput from "../../hooks/useInput/useInput";
import populateInputForm from "./populateInputForm";
import { inputList } from "./inputTypes";
import FormComponent from "../../hooks/useInput/FormComponent";

const convertStringToArrOnObject = (
	str: string | number | string[]
): string | number | string[] => {
	if (typeof str !== "string" || typeof str !== "number") {
		if (typeof str === "string") {
			const regExpForSplit = /,-/g;
			if (regExpForSplit.test(str)) return str.split(regExpForSplit);
			return str;
		}
	}
	console.log(str);

	return str;
};

const ProductEditor: React.FC = () => {
	const [formState, setFormState] = useState<React.ReactNode>();
	const { inputState, inputHandler, convertedValues } = useInput(
		{},
		convertStringToArrOnObject
	);
	const query = useQuery();

	const postRequestToApi = async () => {
		const convertedValuesForApi = convertedValues();
		console.log(convertedValuesForApi, "hello");
		const request = await query(
			"items",
			{ category: "universus" },
			{
				mode: "cors",
				method: "POST",
				body: JSON.stringify(convertedValuesForApi),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				cache: "default",
			}
		);
		console.log(request);
	};

	const inputFormHandler: React.ChangeEventHandler = (event: any) => {
		inputHandler({ [event.target.name]: event.target.value });
	};
	useEffect(() => {
		inputHandler(inputList);
	}, []);

	useEffect(() => {
		const formList: React.ReactNode = populateInputForm(
			inputState,
			inputFormHandler
		);
		setFormState(formList);
	}, [Object.keys(inputState).length]);

	const submitForm: React.FormEventHandler = (event: FormEvent) => {
		event.preventDefault();
		postRequestToApi();
	};

	return (
		<section className="flex column-xs bg-color-blue">
			<FormComponent
				onSubmit={submitForm}
				className={["bg-color-blue", "pad2", "flex", "column-xs"]}
			>
				<section>
					{formState}

					<button type="submit">{"SUBMIT"}</button>
				</section>
			</FormComponent>
		</section>
	);
};

export default ProductEditor;
