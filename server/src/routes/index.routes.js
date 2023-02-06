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

router.get("/parties/:id", async (req, res) => {
	const parties = await Partie.findById(req.params.id);
	res.json(parties);
});

router.post("/update/:id", async (req, res) => {
	const { id } = req.params;
	const { nom, user, sprint, storie } = req.body;
	const parties = await Partie.findById(id);

	console.log(req.body);

	let myNewSprint = parties.sprints;
	myNewSprint.push(sprint);

	let myNewStories = parties.stories;
	myNewStories.push(storie);

	let myNewUsers = parties.users;
	myNewUsers.push(user);

	console.log(myNewStories);

	const myUpdate = {
		nom: nom,
		users: myNewUsers,
		sprints: myNewSprint,
		stories: myNewStories,
	};
	console.log(myUpdate);
	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect("http://localhost:5173/");
});

router.get("/delete/:id", async (req, res) => {
	const { id } = req.params;
	await Partie.findByIdAndDelete(id, req.body);
	res.redirect("http://localhost:5173/");
});

export default router;
