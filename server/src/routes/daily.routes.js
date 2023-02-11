import { Router } from "express";

import dailyController from "../controllers/daily.controller";

const router = Router();

// router.post("/addStory/:id/:utilisateur", storyController.addStory);
router.get("/openDaily/:id", dailyController.openDaily);

router.get("/closeDaily/:id", dailyController.closeDaily);

module.exports = router;
