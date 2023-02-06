import express from "express";
import indexRoutes from "./routes/index.routes";
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
// if have req.body undefined, change this line for app.use("/", indexRoutes) after import middleware (urlencoded) and import body-parser
app.listen(3001, () => {
	console.log(`server on port 3001`);
});
