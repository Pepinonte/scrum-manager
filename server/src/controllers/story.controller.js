import express from "express";

let Partie = require("../models/Partie");
// let Partie = require("../models/Partie");
// import mongoose from "mongoose";

const controller = {};

controller.addStory = async (req, res) => {
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
};

controller.deleteStories = async (req, res) => {
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
};

controller.updateStories = async (req, res) => {
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
};

module.exports = controller;
