import express from "express";
import ENV_VARIABLES from "../utilities/envVars";
import {
	createDeck,
	getDeckById,
	patchDeckById,
	deleteDeckById,
} from "../controllers/decksController";

const router = express.Router();

router
	.route("/:id")
	.get(getDeckById)
	.patch(patchDeckById)
	.delete(deleteDeckById);
router.route("/").post(createDeck);

export default router;
