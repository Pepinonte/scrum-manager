import { Router } from "express";

import storyController from "../controllers/story.controller";

const router = Router();

router.post("/addStory/:id/:utilisateur", storyController.addStory);

router.post(
	"/deleteStories/:rang/:id/:utilisateur",
	storyController.deleteStories
);

router.post(
	"/updateStories/:rang/:id/:utilisateur",
	storyController.updateStories
);

module.exports = router;
