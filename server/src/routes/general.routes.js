import { Router } from "express";

import generalController from "../controllers/general.controller";

const router = Router();

router.post("/add/:utilisateur", generalController.add);

module.exports = router;
