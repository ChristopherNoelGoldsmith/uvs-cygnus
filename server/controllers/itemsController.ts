import catchAsyncFunction from "../utilities/catchAsync";
import Items from "../models/ItemModel";
import AppError from "../utilities/appError";
const { ItemsSchema } = Items;

export const getAllItems = catchAsyncFunction(async (req: any, res: any) => {
	const data = await ItemsSchema.find();
	res.status(200).json({ data, message: "SUCCESS" });
});

/*
///////////////////////////////////////////////////////////////////////////
Finding an item by id in the database
*/
export const getItem = catchAsyncFunction(async (req: any, res: any) => {
	//Query 1 ) Deconstruct query params
	const { id } = req.params;

	// Error Handling ) Ensure the id exists on the parameter
	if (!id) new AppError({ statusCode: 400, message: "Item not found" });

	//Query 2 ) Query the database using the id
	const data = await ItemsSchema.findOne({ id });

	// Resolution
	res.status(200).json({ data, messege: "SUCCESS" });
});

/*
///////////////////////////////////////////////////////////////////////////
Finding items in database using query params


TODO: create if statements to drill into objects "ex - stats{damage: 5, speed: 4};""
*/
export const getItemsByParam = catchAsyncFunction(
	async (req: any, res: any) => {
		// Query 1 ) Deconstruct the query params and state variables
		const value: string | number = req.query.value;
		const par: string = req.query.par;
		// Error Handling ) Check that the params are valid
		if (!par || !value) {
			return new AppError({ statusCode: 400, message: "Item not found" });
		}

		// Query 2 ) Query the server
		const data = await Items.findItemByParam(par, value);

		// Resolution
		res.status(200).json({ data, messege: "SUCCESS" });
	}
);

export const createItem = catchAsyncFunction(async (req: any, res: any) => {
	//Item creation 1 ) Writing it to the database and runing the schema
	const item = await ItemsSchema.create(req.body);

	//Error handling 1 ) Check if the write was a success
	if (!item) {
		return new AppError({
			statusCode: 500,
			message: "THERE WAS AN ISSUE WHEN WRITING THE NEW ITEM!",
		});
	}

	//Resolution
	res.status(200).json({
		data: item,
		message: `${req.body.name} HAS BEEN WRITTEN TO THE DATABASE`,
	});
});

export const deleteItemById = catchAsyncFunction(async (req: any, res: any) => {
	const { id } = req.params;
	const deletion = await ItemsSchema.findByIdAndDelete({ _id: id });

	if (!deletion || deletion === null) {
		console.log("poop");
		new AppError({
			statusCode: 400,
			message: "This item was not found in the database",
		});
		("This item was not found in the database");
	}

	res.status(200).json({
		statusCode: 200,
		message: `${deletion!.name + " successfully deleted!"}`,
	});
});
