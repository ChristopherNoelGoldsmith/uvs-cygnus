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

// interface FindItemByParamInterface {
// 	[key: string]: string | string[] | RegExp | RegExp[];
// }

export interface ItemsModelInterface extends Model<ItemsDocument> {
	methods: {
		findItemByParam(parameters: string): Promise<ItemsDocument>;
	};
}
