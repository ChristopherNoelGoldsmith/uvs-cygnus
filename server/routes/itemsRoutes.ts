import express from "express";
import ENV_VARIABLES from "../utilities/envVars";
import { getAllItems, createItem } from "../controllers/itemsController";

const router = express.Router();
const { MOUNT } = ENV_VARIABLES;

router.route(`${MOUNT}items`).get(getAllItems).post(createItem);

export default router;
