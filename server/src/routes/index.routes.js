import { Router } from "express";
// import { Partie } from "../models/Partie";
let Partie = require("../models/Partie");
import mongoose from "mongoose";

const router = Router();

router.get("/", (req, res) => {
	res.send("Welcome to my API");
});

router.post("/add", async (req, res) => {
	const partie = Partie(req.body);
	// console.log(partie);
	const partieSaved = await partie.save();
	console.log(partieSaved);

	res.redirect("http://localhost:5173/");
});

router.get("/parties", async (req, res) => {
	const parties = await Partie.find();
	res.json(parties);
});

export default router;
