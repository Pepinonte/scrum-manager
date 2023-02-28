import express from "express";

let Partie = require("../models/Partie");
// let Partie = require("../models/Partie");
// import mongoose from "mongoose";

const controller = {};

controller.add = async (req, res) => {
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
};

module.exports = controller;
