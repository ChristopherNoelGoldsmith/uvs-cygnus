import { ErrorMessage } from "../interfaces/errors-interface";

/*
AppError is an extention of the JS error object and is used
as an error handling class for the API
*/

class AppError extends Error {
	message: string;
	statusCode: string;
	isOperational: boolean;

	constructor(err: ErrorMessage) {
		super(err.message);
		this.message = err.message;
		/*
        If status code starts with 4 it returns FAIL rather than error
        to indicate a 400 error
        */
		this.statusCode = `${err.statusCode}`.startsWith("4") ? "FAIL" : "ERROR";
		this.isOperational = true;

		//Error.captureStackTrace(this, this.constructor);
	}
}

export default AppError;
