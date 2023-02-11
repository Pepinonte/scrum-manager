import express from "express";

let Partie = require("../models/Partie");
// let Partie = require("../models/Partie");
// import mongoose from "mongoose";

const controller = {};

controller.addUser = async (req, res) => {
	const { id, utilisateur } = req.params;
	const { user } = req.body;
	const parties = await Partie.findById(id);

	let myNewUsers = parties.useres;
	myNewUsers.push(user);

	const myUpdate = {
		users: myNewUsers,
	};

	await Partie.findByIdAndUpdate(id, myUpdate);
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
};

controller.deleteUser = async (req, res) => {
	const { id, rang, utilisateur } = req.params;
	const parties = await Partie.findById(id);
	let myNewUser = parties.users;
	myNewUser.splice(rang, 1);

	const myUpdate = {
		users: myNewUser,
	};
	await Partie.findByIdAndUpdate(id, myUpdate);
	// res.redirect("http://localhost:5173/");
	res.redirect(`http://localhost:5173/joinedPage/${id}/${utilisateur}`);
};

module.exports = controller;
