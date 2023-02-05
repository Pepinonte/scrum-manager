import mongoose from "mongoose";

// connection to db
(async () => {
	try {
		mongoose.set("strictQuery", false);
		const db = await mongoose.connect("mongodb://127.0.0.1:27017/scrum");
		console.log("Db connectect to", db.connection.name);
	} catch (error) {
		console.error(error);
	}
})();
