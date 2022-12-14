import { Schema } from "mongoose";
import Universus from "../models/UniversusModel/UniversusModel";
import AppError from "../utilities/appError";
import Items from "../models/ItemModel";

export const checkCategoryAndReturnSchema = (category: string | null) => {
	if (!category) category = "default";
	switch (category) {
		case "default":
			return Items;
			break;
		case "universus":
			return Universus;
			break;
		default:
			throw new AppError({ statusCode: 400, message: "Invalid category!" });
			break;
	}
};
