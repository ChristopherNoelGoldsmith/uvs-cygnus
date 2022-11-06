import catchAsyncFunction from "../utilities/catchAsync";
import ItemsSchema from "../models/ItemModel";
import AppError from "../utilities/appError";

export const getAllItems = catchAsyncFunction(async (req: any, res: any) => {
	const data = await ItemsSchema.find();
	res.status(200).json({ data, message: "SUCCESS" });
});

export const createItem = catchAsyncFunction(async (req: any, res: any) => {
	console.log(req.body);
	//Item creation 1 ) Writing it to the database and runing the schema
	const item = await ItemsSchema.create(req.body);

	//Error handling 1 ) Check if the write was a success
	if (!item) {
		return new AppError({
			statusCode: 500,
			message: "THERE WAS AN ISSUE WHEN WRITING THE NEW ITEM!",
		});
	}

	res.status(200).json({
		data: item,
		message: `${req.body.name} HAS BEEN WRITTED TO THE DATABASE`,
	});
});
