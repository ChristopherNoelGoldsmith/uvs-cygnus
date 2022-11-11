import { Model } from "mongoose";

export interface ItemStats {
	[key: string]: string | number;
}

export interface ItemsDocument extends Document {
	name: string;
	text: string;
	stats: ItemStats;
	origin: string;
	attributes: string[];
	game: string;
	subType?: string;
	image?: string;
	keywords?: string[];
	tags?: string[];
}

export interface ItemsModel extends Model<ItemsDocument> {
	methods: {
		findItemByParam(
			param: string,
			value: string | number
		): Promise<ItemsDocument>;
	};
}
