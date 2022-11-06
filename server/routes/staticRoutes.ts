import express from "express";
import path from "path";
const router = express.Router();
//?@staticMiddleware: Determines the path of the static page

const { ROOT } = process.env;

router.route("/").get((req: Request, res: any) => {
	res.sendFile(path.join(__dirname, ROOT!, "index.html"));
});

export default router;
