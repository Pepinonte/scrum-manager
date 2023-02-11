import express from "express";
import indexRoutes from "./routes/index.routes";
import generalRoutes from "./routes/general.routes";
import sprintRoutes from "./routes/sprint.routes";
import storyRoutes from "./routes/story.routes";
import dailyRoutes from "./routes/daily.routes";
import userRoutes from "./routes/user.routes";
import "./database";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use(indexRoutes);
app.use(generalRoutes);
app.use(sprintRoutes);
app.use(storyRoutes);
app.use(dailyRoutes);
app.use(userRoutes);
// if have req.body undefined, change this line for app.use("/", indexRoutes) after import middleware (urlencoded) and import body-parser
app.listen(3001, () => {
	console.log(`server on port 3001`);
});
