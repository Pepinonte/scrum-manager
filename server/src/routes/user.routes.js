import { Router } from "express";

import userController from "../controllers/user.controller";

const router = Router();

//a tester
router.post("/addUser/:id/:utilisateur", userController.addUser);

//a tester
router.post("/deleteUser/:rang/:id/:utilisateur", userController.deleteUser);

module.exports = router;
