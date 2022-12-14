/*
SUMMARY )
This is the schema used to design the items written to the database
*/
import { convertParametersToRegExp } from "../ItemModelsUtils/PopulateFilterObject";
import mongoose, { Schema } from "mongoose";
import { ItemsDocument, ItemsModelInterface } from "./ItemModelInterfaces";
//TODO: create a presave function that parses text and creates tags with regExp
//? @keywords: used for things like "powerful in ufs" or "flying" in mtg

export const BaseSchema = (
	schemaName: string,
	collection: string,
	stats: Object = {}
): Schema => {
	return new Schema(
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
			image: {
				type: String,
			},
			cardType: {
				type: String,
				required: true,
			},
			keywords: {
				type: [String],
			},
			tags: {
				type: [String],
			},
			...stats,
		},
		{
			collection: collection,
			methods: {
				/*
	///////////////////////////////////////////////////////////////////////////
		Finding items in database using query params
	
		TODO: create if statements to drill into objects "ex - stats{damage: 5, speed: 4};""
	*/

				findItemByParam(parameters: any) {
					//! A Workaround to remove a conflict with the search function
					if (parameters.category) delete parameters.category;
					const filterObject = convertParametersToRegExp(parameters);
					///////////////////////////////////
					console.log(filterObject, "sweet");
					///////////////////////////////////
					return mongoose.model(schemaName).find(filterObject!);
				},
			},
		}
	);
};

const ItemsModel = BaseSchema("ItemsModel", "items");

const model: ItemsModelInterface = mongoose.model<
	ItemsDocument,
	ItemsModelInterface
>("ItemsModel", ItemsModel);

const models = {
	model,
	findItemByParam: ItemsModel.methods.findItemByParam,
};
export default models;
