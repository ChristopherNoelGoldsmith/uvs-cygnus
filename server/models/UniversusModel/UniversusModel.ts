import { BaseSchema } from "../ItemModel";
import { ItemsDocument, ItemsModel } from "../ItemModelInterfaces";
import { universusMiddlewareInit } from "./universusMiddleware";
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
		required: false,
	},
	control: {
		type: Number,
		required: true,
	},
};

export const UniversusModel = BaseSchema("universus", stats);

universusMiddlewareInit();

const model = mongoose.model<ItemsDocument, ItemsModel>(
	"UniversusModel",
	UniversusModel
);

export default model;
