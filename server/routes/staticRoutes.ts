import express from "express";
import path from "path";
import ENV_VARIABLES from "../utilities/envVars";
const router = express.Router();
const { ROOT } = ENV_VARIABLES;

//?@staticMiddleware: Determines the path of the static page

router.route("/").get((req: Request, res: any) => {
	res.sendFile(path.join(__dirname, ROOT!, "index.html"));
});

export default router;
