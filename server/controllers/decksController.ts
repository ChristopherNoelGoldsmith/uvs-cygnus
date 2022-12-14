import DecksModel from "../models/DecksModels/DecksModels";
import AppError from "../utilities/appError";
import catchAsyncFunction from "../utilities/catchAsync";

export const createDeck = catchAsyncFunction(async (req: any, res: any) => {
	//ADD USER
	const { name, cards } = req.body;

	if (!name || !cards) {
		return new AppError({
			statusCode: 404,
			message: "Invalid request, some resources not found!",
		});
	}

	const data = await DecksModel.model.create({ name, cards });

	res
		.status(200)
		.json({ status: 200, message: `${data.name} created successfully!` });
});

export const getDeckById = catchAsyncFunction(async (req: any, res: any) => {
	//ADD USER
	const { id } = req.params;

	if (!id) {
		return new AppError({
			statusCode: 404,
			message: "Invalid request, some resources not found!",
		});
	}

	const data = await DecksModel.model.findById(id).populate("cards");

	if (!data || data === null) {
		return new AppError({
			statusCode: 404,
			message: "Invalid request, some resources not found!",
		});
	}

	res.status(200).json({ status: 200, data: data });
});

export const patchDeckById = catchAsyncFunction(async (req: any, res: any) => {
	//ADD USER
	const { id } = req.params;

	if (!id || !req.body) {
		return new AppError({
			statusCode: 404,
			message: "Invalid request, some resources not found!",
		});
	}

	const data = await DecksModel.model.findByIdAndUpdate(id, req.body);

	if (!data || data === null) {
		return new AppError({
			statusCode: 404,
			message: "Invalid request, some resources not found!",
		});
	}

	res
		.status(200)
		.json({ status: 200, data: data, message: "Update successful!" });
});

export const deleteDeckById = catchAsyncFunction(async (req: any, res: any) => {
	//ADD USER
	const { id } = req.params;

	if (!id) {
		return new AppError({
			statusCode: 404,
			message: "Invalid request, some resources not found!",
		});
	}

	const data = await DecksModel.model.findByIdAndDelete(id);

	if (!data || data === null) {
		return new AppError({
			statusCode: 404,
			message: "Invalid request, some resources not found!",
		});
	}

	res
		.status(200)
		.json({ status: 204, data: data, message: "Sucessfully deleted!" });
});
