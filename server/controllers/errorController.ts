import AppError from "../utilities/appError";

const handleJWTError = (err: any) => {
	return new AppError("Invalid token, please log in again", 401);
};
const handleExpiredTokenError = (err: any) => {
	return new AppError("Session has expired, please log in again!", 401);
};

const errDev = (res: any, err: any) => {
	if (err.isOperational) {
		return res.json({
			status: err.statusCode,
			message: err.message,
			error: err,
			stack: err.stack,
		});
	}
	console.error("ERROR", err);
	return res
		.status(500)
		.json({ status: "ERROR!", message: "SOMETHING WENT VERY WRONG!!!" });
};

const errProduction = (res: any, err: any) => {
	return res.json({ status: err.statusCode, message: err.message });
};

module.exports = (err: any, req: any, res: any, next: any) => {
	err.statusCode = err.statusCode || 500;
	err.message = err.message || "ERROR!";

	if (process.env.NODE_ENV === "development") {
		return errDev(res, err);
	}
	if (error.name === "JsonWebTokenError") error = handleJWTError(error);
	if (error.name === "TokenExpiredError")
		error = handleExpiredTokenError(error);
	return errProduction(res, err);
};
