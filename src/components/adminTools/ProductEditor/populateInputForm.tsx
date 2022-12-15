import React from "react";

interface InputFormInterface {
	[key: string]: number | string | string[];
}

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

		const inputType = key !== "text" ? inputElement : textareaElement;

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
