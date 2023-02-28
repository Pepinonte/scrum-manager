import { Router } from "express";

import sprintController from "../controllers/sprint.controller";

const router = Router();

router.post("/addSprint/:id/:utilisateur", sprintController.addSprint);

router.post(
	"/deleteSprint/:rang/:id/:utilisateur",
	sprintController.deleteSprint
);

router.post(
	"/updateSprint/:rang/:id/:utilisateur",
	sprintController.updateSprint
);

module.exports = router;
