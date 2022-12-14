import mongoose, { Schema } from "mongoose";

const BaseDeckSchema = (collection: string, cardModel: string) => {
	return new Schema(
		{
			name: {
				type: String,
				required: true,
			},
			cards: {
				type: [mongoose.Schema.Types.ObjectId],
				ref: cardModel,
				required: true,
			},
			dateCreated: { type: Number },
			lastEdited: { type: Number },
			private: { type: Boolean, default: false },
			views: Number,
			likes: Number,
		},
		{
			collection: collection,
		}
	);
};

const BaseDecks = BaseDeckSchema("userDecks", "UniversusModel");

BaseDecks.pre("save", function async(next) {
	this.dateCreated = Date.now();
	next();
});

BaseDecks.pre(/update/i, function async(next) {
	this.lastEdited = Date.now();
	next();
});

const model = mongoose.model("DecksModel", BaseDecks);

const models = {
	model,
};

export default models;
