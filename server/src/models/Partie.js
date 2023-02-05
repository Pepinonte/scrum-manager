import { Schema, model } from "mongoose";

const partieSchema = Schema(
	{
		nom: { type: String, required: true, trim: true, unique: true },
		// users: {
		// type: Array,
		// default: [],
		// },
		// sprints: {
		// 	type: Array,
		// 	default: [],
		// },
		// stories: {
		// 	type: Array,
		// 	default: [],
		// },
	},
	{
		// timestamps: true,
		versionKey: false,
	}
);

const Partie = model("Partie", partieSchema);
module.exports = Partie;

// export default model("Partie", partieSchema);
