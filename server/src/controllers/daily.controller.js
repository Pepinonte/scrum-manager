import express from "express";

let Partie = require("../models/Partie");
// let Partie = require("../models/Partie");
// import mongoose from "mongoose";

const controller = {};

controller.openDaily = async (req, res) => {
	const { id } = req.params;

	const myUpdate = {
		dailyState: true,
	};

	await Partie.findByIdAndUpdate(id, myUpdate);
};

controller.closeDaily = async (req, res) => {
	const { id } = req.params;
	const parties = await Partie.findById(id);

	const myUpdate = {
		dailyState: false,
		daysNumber: parties.daysNumber + 1,
	};

	await Partie.findByIdAndUpdate(id, myUpdate);
};

module.exports = controller;
