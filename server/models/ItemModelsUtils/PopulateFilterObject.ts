//Utility function to do as the title says

import AppError from "../../utilities/appError";

//arrays are split by '-' when passed to this api
const checkIfUrlContainsObjectOrArray = (url: string): RegExp[] | void => {
	if (url.includes("-")) {
		const arr = url.split("-");
		return arr.map((index: string) => {
			return new RegExp(index, "i");
		});
	}
};

const filterAndConvertToRegExp = (param: string, value: string | string[]) => {
	//Filter 1 ) If value is string check if it is a number or object or ONLY a string
	if (typeof value === "string") {
		//Filter 1-A ) check if value is an array, and returns an array of regExp if it is
		const isAnArray: RegExp[] | void = checkIfUrlContainsObjectOrArray(value);
		//TODO Filter 1-B object
		//const isAnObject: RegExp[] | void;

		if (isAnArray) {
			return { [param]: { $all: isAnArray } };
		} else {
			//Filter 1-C if value was not an array or object, convert to regExp and plugs into filter object

			const regExp = new RegExp(value, "i");
			return { [param]: regExp };
		}
	}

	//Filter 1 ) If value is number
	// if (typeof value === "number") {
	// 	return { [param]: value };
	// }
};

/*
?@param counter: Used for the number of times the function will reccur when constructing the object
?@param parameters: The object with it's values being converted to regular expressions.
?param filter: An optional param that you can use if you want a specific object to start with, defaults as an empty 
*/

const convertValuesToRegExp = (
	counter: number,
	parameters: any,
	filter: Object = {}
) => {
	// Exit: Counter is decrimented by 1 on each  )
	if (counter === 0) return filter;

	// Error Handling if an invalid nunmber is put in counter
	if (counter < 0) {
		return new AppError({
			statusCode: 500,
			message: "You cannot convert a value into a regexp less than one time.",
		});
	}

	// Extracts the keys from the object
	const paramKeys: string[] = Object.keys(parameters);

	//Decriments the counter for each reccursion
	counter = counter - 1;

	// Used as the key to each object when converting to regExp
	const key: string = paramKeys[counter];

	// regExp conversion function
	const objectWithRegExpValues = filterAndConvertToRegExp(key, parameters[key]);
	//Combines the current filter object with the object created from @objectWithRegExValues
	filter = { ...filter, ...objectWithRegExpValues };

	//reccurs function and set the value of filter for it to be returned by the reccursion
	filter = convertValuesToRegExp(counter, parameters, filter);

	return filter;
};

export const convertParametersToRegExp = (parameters: any) => {
	const paramKeys: string[] = Object.keys(parameters);
	if (paramKeys.length === 1)
		return filterAndConvertToRegExp(paramKeys[0], parameters[paramKeys[0]]);

	if (paramKeys.length > 1) {
		return convertValuesToRegExp(paramKeys.length, parameters);
	}
};
