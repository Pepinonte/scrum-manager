import { Router } from "express";
// import { Partie } from "../models/Partie";
let Partie = require("../models/Partie");
import mongoose from "mongoose";

const router = Router();

router.get("/", (req, res) => {
	res.send("Welcome to my API");
});

router.post("/add/:utilisateur", async (req, res) => {
	const { nom, pseudo } = req.body;
	const { utilisateur } = req.params;
	const partie = Partie({
		nom: nom,
		users: [pseudo],
	});
	console.log(partie);
	const partieSaved = await partie.save();
	console.log(partieSaved);
	console.log(req.params);

	res.redirect(
		`http://localhost:5173/joinedPage/${partieSaved._id}/${utilisateur}`
	);
	// res.redirect(`http://localhost:5173/joinedPage/${partieSaved._id}/moi`);
});

router.post("/addSprint/:id/:utilisateur", async (req, res) => {
	const { id, utilisateur } = req.params;
	const { sprint } = req.body;
	const parties = await Partie.findById(id);

	let myNewSprint = parties.sprints;
	myNewSprint.push(sprint);

	const myUpdate = {
		nom: parties.nom,
		users: parties.users,
		sprints: myNewSprint,
		stories: parties.stories,
	};

	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
});

router.post("/addStory/:id/:utilisateur", async (req, res) => {
	const { id, utilisateur } = req.params;
	const { storie } = req.body;
	console.log(storie);
	console.log(req.body);
	const parties = await Partie.findById(id);

	let myNewStory = parties.stories;
	myNewStory.push(storie);

	const myUpdate = {
		nom: parties.nom,
		users: parties.users,
		sprints: parties.sprints,
		stories: myNewStory,
	};

	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
});

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

router.post("/deleteSprint/:rang/:id/:utilisateur", async (req, res) => {
	const { id, rang, utilisateur } = req.params;
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
	// res.redirect("http://localhost:5173/");
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
});

router.post("/updateSprint/:rang/:id/:utilisateur", async (req, res) => {
	const { id, rang, utilisateur } = req.params;
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
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
});

router.post("/deleteStories/:rang/:id/:utilisateur", async (req, res) => {
	const { id, rang, utilisateur } = req.params;
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
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
});

router.post("/updateStories/:rang/:id/:utilisateur", async (req, res) => {
	const { id, rang, utilisateur } = req.params;
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
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
});

router.get("/openDaily/:id", async (req, res) => {
	const { id } = req.params;

	const myUpdate = {
		dailyState: true,
	};

	await Partie.findByIdAndUpdate(id, myUpdate);
});

router.get("/closeDaily/:id", async (req, res) => {
	const { id } = req.params;
	const parties = await Partie.findById(id);

	const myUpdate = {
		dailyState: false,
		daysNumber: parties.daysNumber + 1,
	};

	await Partie.findByIdAndUpdate(id, myUpdate);
});

export default router;
