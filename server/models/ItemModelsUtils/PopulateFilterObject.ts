//Utility function to do as the title says
//arrays are split by '-' when passed to this api
const checkIfUrlContainsArray = (url: string): RegExp[] | void => {
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
		const isAnArray: RegExp[] | void = checkIfUrlContainsArray(value);
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

export const convertParametersToRegExp = (parameters: any) => {
	const paramKeys: string[] = Object.keys(parameters);

	if (paramKeys.length === 1)
		return filterAndConvertToRegExp(paramKeys[0], parameters[paramKeys[0]]);

	if (paramKeys.length > 1) {
		const recursion = (filter: Object, counter: number) => {
			console.log(filter, counter);
			if (counter === 0) return filter;
			//
			counter = counter - 1;
			const key = paramKeys[counter];
			const objectWithRegExpValues = filterAndConvertToRegExp(
				key,
				parameters[key]
			);
			//
			filter = { ...filter, ...objectWithRegExpValues };
			filter = recursion(filter, counter);
			return filter;
		};

		return recursion({}, paramKeys.length);
	}
};
