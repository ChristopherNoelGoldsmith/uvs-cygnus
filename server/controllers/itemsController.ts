import catchAsyncFunction from "../utilities/catchAsync";
import AppError from "../utilities/appError";
//import UniversusModel from "../models/UniversusModel/UniversusModel";
import { checkCategoryAndReturnSchema } from "./middleware";
export const getAllItems = catchAsyncFunction(async (req: any, res: any) => {
	const { model } = checkCategoryAndReturnSchema(null);
	const data = await model.find();
	res.status(200).json({ data, message: "SUCCESS" });
});

/*
! NOTE ON QUERY PARAMS AND THEIR USE IN THIS PROJECT AND IN THESE CONTROLLERS
Query params are basically used as full objects passed through the url

In functions the Object.keys() method will be used to dissable them and repurpose the value as seen fit
Primarily the value (which is typically a string) will be converted to to a regexp by middleware
The other uses are categorization such as through the "category" value.

Values like "category" will be deleted during the params processing to avoid causing an error in the query
Look at "../models/ItemsModel.ts" for examples.
*/

/*
///////////////////////////////////////////////////////////////////////////
Finding an item by id in the database
*/
export const getItem = catchAsyncFunction(async (req: any, res: any) => {
	//Query 1 ) Deconstruct query params
	const { id } = req.params;
	const { category } = req.query;
	const { model } = checkCategoryAndReturnSchema(category);
	// Error Handling ) Ensure the id exists on the parameter
	if (!id) new AppError({ statusCode: 400, message: "Item not found" });

	//Query 2 ) Query the database using the id
	const data = await model.findOne({ id });

	// Resolution
	res.status(200).json({ data, messege: "SUCCESS" });
});

/*
///////////////////////////////////////////////////////////////////////////
Finding items in database using query params

*/
export const getItemsByParam = catchAsyncFunction(
	async (req: any, res: any) => {
		// Query 1 ) Deconstruct the query params and state variables
		const { category } = req.query;
		const { findItemByParam } = checkCategoryAndReturnSchema(category);
		// Error Handling ) Check that the params are valid
		if (!req.query) {
			return new AppError({ statusCode: 400, message: "Item not found" });
		}
		// Query 2 ) Query the server
		const data = await findItemByParam(req.query);

		// Resolution
		res.status(200).json({ data, messege: "SUCCESS" });
	}
);

/*
///////////////////////////////////////////////////////////////////////////
Create an item in the database using query params

*/

export const createItem = catchAsyncFunction(async (req: any, res: any) => {
	const { category } = req.query;
	const { model } = checkCategoryAndReturnSchema(category);
	//Item creation 1 ) Writing it to the database and runing the schema
	const item = await model.create(req.body);

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
export const patchItem = catchAsyncFunction(async (req: any, res: any) => {
	const { id } = req.params;
	const { category } = req.query;
	const { model } = checkCategoryAndReturnSchema(category);

	const data = await model.findByIdAndUpdate({ _id: id }, req.body);

	//Error Handling 1 ) Ensure valid update was initiated
	if (!data || data === null) {
		return new AppError({ statusCode: 404, message: "Not found!" });
	}

	// Resolution
	res.status(200).json({ statusCode: 200, message: `${data.name} | UPDATED!` });
});

export const deleteItemById = catchAsyncFunction(async (req: any, res: any) => {
	const { id } = req.params;
	const { category } = req.query;
	const { model } = checkCategoryAndReturnSchema(category);

	const deletion = await model.findByIdAndDelete({ _id: id });

	//Error Handling ) Check if the delete attempt was valid
	if (!deletion || deletion === null) {
		return new AppError({
			statusCode: 404,
			message: "This item was not found in the database",
		});
	}

	// Resolution
	res.status(204).json({
		statusCode: 204,
		message: `${deletion.name + " successfully deleted!"}`,
	});
});
