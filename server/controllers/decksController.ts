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
	console.log("poo poo");
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
