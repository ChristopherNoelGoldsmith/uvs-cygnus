import express from "express";
import ENV_VARIABLES from "../utilities/envVars";
import { createDeck, getDeckById } from "../controllers/decksController";

const router = express.Router();

router.route("/:id").get(getDeckById);
router.route("/").post(createDeck);

export default router;
