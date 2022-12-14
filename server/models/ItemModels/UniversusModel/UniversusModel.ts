import { BaseSchema } from "../ItemModel";
import { ItemsDocument, ItemsModelInterface } from "../ItemModelInterfaces";
import universusMiddlewareInit from "./universusMiddleware";
import mongoose from "mongoose";

const stats = {
	health: {
		type: Number,
		required: false,
	},
	handSize: {
		type: Number,
		required: false,
	},
	damage: {
		type: Number,
		required: false,
	},
	//Values must be 'high', 'mid', or 'low'
	attackZone: {
		type: String,
		enum: ["high", "low", "mid"],
		required: false,
	},
	speed: {
		type: Number,
		required: false,
	},
	difficulty: {
		type: Number,
		required: true,
	},
	blockMod: {
		type: Number,
		required: false,
	},
	//Values must be 'high', 'mid', or 'low'
	blockZone: {
		type: String,
		enum: ["high", "low", "mid"],
		required: false,
	},
	control: {
		type: Number,
		required: true,
	},
};

/*
Schema initiation and middleware initiation
*/
export const UniversusModel = BaseSchema("UniversusModel", "universus", stats);

universusMiddlewareInit();

const model = mongoose.model<ItemsDocument, ItemsModelInterface>(
	"UniversusModel",
	UniversusModel
);

const models = {
	model: model,
	findItemByParam: UniversusModel.methods.findItemByParam,
};

export default models;
