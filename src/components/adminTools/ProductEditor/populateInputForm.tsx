import React, { ChangeEventHandler, ReactElement } from "react";
import SelectComponent, {
	SelectComponentInterface,
} from "../../hooks/useInput/SelectComponent";
import { OptionComponentInterface } from "../../hooks/useInput/SelectComponent";

interface InputFormInterface {
	[key: string]: number | string | string[];
}

export const createSelectorElement = (
	arr: string[],
	onChangeCallback: ChangeEventHandler
) => {
	const options: OptionComponentInterface[] = arr.map((str: string) => {
		return { label: str, value: str, className: [""], id: str };
	});

	return (
		<SelectComponent
			optionsArray={options}
			selectId={"attribute"}
			selectClassName={["fake"]}
			selectName={"attribute"}
			onChange={onChangeCallback}
		/>
	);
};

const populateInputForm = (
	inputObj: InputFormInterface,
	inputFormHandler: any
): React.ReactNode[] => {
	const keys = Object.keys(inputObj);

	return keys.map((key: string) => {
		//Makes first letter of label uppercase and all other letters lowercase;
		const makeLabelName = (key: string) => {
			const name: string | string[] = key.toLowerCase().split("");
			name[0] = name[0].toUpperCase();
			return name.join("");
		};
		const labelName = makeLabelName(key);

		const inputElement = (
			<input
				id={key}
				className="font f-center pad1"
				type={inputObj[key] !== typeof "number" ? "text" : "number"}
				placeholder={key.toUpperCase()}
				name={key}
				onChange={inputFormHandler}
				value={inputObj[key]}
			/>
		);
		const textareaElement = (
			<textarea
				name={key}
				id={key}
				cols={30}
				rows={10}
				placeholder={key.toUpperCase()}
				className="font f-left pad1"
				onChange={inputFormHandler}
				value={inputObj[key]}
			></textarea>
		);

		let inputType;

		if (
			typeof inputObj[key] === "string" &&
			typeof inputObj[key] === "number"
		) {
			inputType = createSelectorElement(inputObj[key], inputFormHandler);
		} else {
			inputType = key !== "text" ? inputElement : textareaElement;
		}
		return (
			<figure className="flex bg-color-white fill-x space-between row-xs">
				<label className="bg-color-white pad1 font f-center" htmlFor={key}>
					{labelName}
				</label>
				{inputType}
			</figure>
		);
	});
};

export default populateInputForm;
