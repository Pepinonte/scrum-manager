import express from "express";
import { controller } from "../controllers/customerController.js";
export const router = express.Router();

router.post("/add", controller.add);
// router.post("/partiesPerId", controller.partiesPerId);
router.get("/partiesPerId/:id", controller.partiesPerId);
router.get("/listPartiesUser", controller.listPartiesUser);
router.post("/dellGame", controller.dellGame);
