/*
SUMMARY )
This is the schema used to design the items written to the database
*/

import mongoose from "mongoose";
const { Schema } = mongoose;

interface ItemStats {
	[key: string]: string | number;
}

interface ItemsSchemaInterface {
	name: string;
	text: string;
	stats: ItemStats;
	origin: string;
	attributes: string[];
	image?: string;
	keywords?: string[];
	tags?: string[];
}

//TODO: create a presave function that parses text and creates tags with regExp
//? @keywords: used for things like "powerful in ufs" or "flying" in mtg
const ItemsSchema = new Schema<ItemsSchemaInterface>({
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
	image: {
		type: String,
	},
	keywords: {
		type: [String],
	},
	tags: {
		type: [String],
	},
});

const model = mongoose.model("ItemsSchema", ItemsSchema);

export default model;
