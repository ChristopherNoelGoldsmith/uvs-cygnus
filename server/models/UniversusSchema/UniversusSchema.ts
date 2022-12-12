import { BaseSchema } from "../ItemModel";
import { ItemsDocument, ItemsModel } from "../ItemModelInterfaces";
import mongoose from "mongoose";

const stats = {
	damage: {
		type: Number,
		required: true,
	},
	speed: {
		type: Number,
		required: true,
	},
};

const UniversusSchema = BaseSchema("Universus", stats);

const model = mongoose.model<ItemsDocument, ItemsModel>(
	"UniversusSchema",
	UniversusSchema
);

export default model;
