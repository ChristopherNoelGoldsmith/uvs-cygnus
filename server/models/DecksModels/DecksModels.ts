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
			dateCreated: { type: Date },
			lastEdited: { type: Date },
			private: { type: Boolean, default: false },
		},
		{
			collection: collection,
		}
	);
};

const BaseDecks = BaseDeckSchema("userDecks", "UniversusModel");

BaseDecks.pre("save", function async(next) {
	this.dateCreated = new Date();
	next();
});

const model = mongoose.model("DecksModel", BaseDecks);

const models = {
	model,
};

export default models;
