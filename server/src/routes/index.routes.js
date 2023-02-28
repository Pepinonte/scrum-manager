import { Router } from "express";
// import { Partie } from "../models/Partie";
let Partie = require("../models/Partie");
import mongoose from "mongoose";

// import generalController from "../controllers/general.controller";
// const generalController = require("../controllers/general.controller");

const router = Router();

router.get("/parties", async (req, res) => {
	const parties = await Partie.find();
	res.json(parties);
});

router.get("/parties/:id", async (req, res) => {
	const parties = await Partie.findById(req.params.id);
	res.json(parties);
});

router.post("/update/:id/:utilisateur", async (req, res) => {
	const { id, utilisateur } = req.params;
	const { nom, user, sprint, storie } = req.body;
	console.log(utilisateur);
	const parties = await Partie.findById(id);

	// console.log("eeee: " + parties.sprints[1]);
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
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
});

router.post("/join/:id/:utilisateur", async (req, res) => {
	const { id, utilisateur } = req.params;
	const { nom, user, sprint, storie, pseudo } = req.body;
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
		users: pseudo,
		sprints: myNewSprint,
		stories: myNewStories,
	};
	console.log(myUpdate);
	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}}`);
});

router.get("/delete/:id", async (req, res) => {
	const { id } = req.params;
	await Partie.findByIdAndDelete(id, req.body);
	res.redirect("http://localhost:5173/");
});

export default router;
