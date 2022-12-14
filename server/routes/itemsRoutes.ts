import express from "express";
import ENV_VARIABLES from "../utilities/envVars";
import {
	getItemsByParam,
	getAllItems,
	createItem,
	getItem,
	deleteItemById,
	patchItem,
} from "../controllers/itemsController";

const router = express.Router();

router.route(`/find`).get(getItemsByParam);
router.route(`/`).get(getAllItems).post(createItem);
router.route(`/find/:id`).get(getItem).patch(patchItem).delete(deleteItemById);

export default router;
