import express from "express";

let Partie = require("../models/Partie");
// let Partie = require("../models/Partie");
// import mongoose from "mongoose";

const controller = {};

controller.addSprint = async (req, res) => {
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
};

controller.deleteSprint = async (req, res) => {
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
};

controller.updateSprint = async (req, res) => {
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
};

module.exports = controller;
