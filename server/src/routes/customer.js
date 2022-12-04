import express from "express";
import { controller } from "../controllers/customerController.js";
export const router = express.Router();

router.post("/add", controller.add);
router.get("/listPartiesUser", controller.listPartiesUser);
