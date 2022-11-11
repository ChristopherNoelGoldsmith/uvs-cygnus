import express from "express";
import ENV_VARIABLES from "../utilities/envVars";
import {
	getItemsByParam,
	getAllItems,
	createItem,
	getItem,
	deleteItemById,
} from "../controllers/itemsController";

const router = express.Router();

router.route(`/find`).get(getItemsByParam);
router.route(`/`).get(getAllItems).post(createItem);
router.route(`/find/:id`).get(getItem).delete(deleteItemById);

export default router;
