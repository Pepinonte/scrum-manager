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

	console.log("eeee: " + parties.sprints[1]);
	let myNewSprint = parties.sprints;
	myNewSprint.push(sprint);

	let myNewStories = parties.stories;
	myNewStories.push(storie);

	let myNewUsers = parties.users;
	myNewUsers.push(user);

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

router.post("/deleteSprint/:rang/:id", async (req, res) => {
	const { id, rang } = req.params;
	const parties = await Partie.findById(id);
	let myNewSprint = parties.sprints;
	myNewSprint.splice(rang, 1);

	const myUpdate = {
		nom: parties.nom,
		users: parties.users,
		sprints: myNewSprint,
		stories: parties.stories,
	};
	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect("http://localhost:5173/");
});

router.post("/updateSprint/:rang/:id", async (req, res) => {
	const { id, rang } = req.params;
	const parties = await Partie.findById(id);
	let myNewSprint = parties.sprints;
	myNewSprint.splice(rang, 1, req.body.sp);

	const myUpdate = {
		nom: parties.nom,
		users: parties.users,
		sprints: myNewSprint,
		stories: parties.stories,
	};
	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect("http://localhost:5173/");
});

router.post("/deleteStories/:rang/:id", async (req, res) => {
	const { id, rang } = req.params;
	const parties = await Partie.findById(id);

	let myNewStorie = parties.stories;
	myNewStorie.splice(rang, 1);

	const myUpdate = {
		nom: parties.nom,
		users: parties.users,
		sprints: parties.sprints,
		stories: myNewStorie,
	};
	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect("http://localhost:5173/");
});

router.post("/updateStories/:rang/:id", async (req, res) => {
	const { id, rang } = req.params;
	const parties = await Partie.findById(id);

	let myNewStorie = parties.stories;
	myNewStorie.splice(rang, 1, req.body.storie);

	const myUpdate = {
		nom: parties.nom,
		users: parties.users,
		sprints: parties.sprints,
		stories: myNewStorie,
	};
	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect("http://localhost:5173/");
});

export default router;
