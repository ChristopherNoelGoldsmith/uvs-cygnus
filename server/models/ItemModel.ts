/*
SUMMARY )
This is the schema used to design the items written to the database
*/
import AppError from "../utilities/appError";
import { convertParametersToRegExp } from "./ItemModelsUtils/PopulateFilterObject";
import mongoose, { Schema } from "mongoose";
import { ItemsDocument, ItemsModel, ItemStats } from "./ItemModelInterfaces";
//TODO: create a presave function that parses text and creates tags with regExp
//? @keywords: used for things like "powerful in ufs" or "flying" in mtg
const ItemsSchema: Schema = new Schema(
	{
		name: {
			type: String,
			required: [true, "An item must have a name"],
			trim: true,
			unique: true,
		},
		text: {
			type: String,
			required: [true, "An item must have a text field!"],
			trim: true,
		},
		stats: {
			type: Object,
			required: true,
		},
		origin: {
			type: String,
			required: [true, "State your items origin!"],
		},
		attributes: {
			type: [String],
			required: [
				true,
				"Your item must include attributes | EXAMPLE: Blue or Air or Warrir",
			],
		},
		game: {
			type: String,
			required: [true, "State the game this item belongs to."],
		},
		subType: {
			type: String,
		},
		image: {
			type: String,
		},
		keywords: {
			type: [String],
		},
		tags: {
			type: [String],
		},
	},
	{
		collection: "items",
		methods: {
			/*
///////////////////////////////////////////////////////////////////////////
	Finding items in database using query params

	TODO: allow this function to work with multiple parameters

	TODO: create if statements to drill into objects "ex - stats{damage: 5, speed: 4};""
*/

			findItemByParam(parameters) {
				const filterObject = convertParametersToRegExp(parameters);
				console.log(filterObject, "sweet");
				return mongoose.model("ItemsSchema").find(filterObject!);
			},
		},
	}
);

const model: ItemsModel = mongoose.model<ItemsDocument, ItemsModel>(
	"ItemsSchema",
	ItemsSchema
);

const models = {
	ItemsSchema: model,
	findItemByParam: ItemsSchema.methods.findItemByParam,
};
export default models;
