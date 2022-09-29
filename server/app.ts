const babel = require("babel");
const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
const { MODE, PORT } = process.env;
const rootDir = "../dist";

const staticMiddleware: any = express.static(path.join(__dirname, rootDir));
app.use(staticMiddleware);

app.get("/", (req: any, res: any) => {
	res.sendFile(path.join(__dirname, rootDir, "index.html"));
});

app.listen(PORT, () => {
	console.log(`Server is listening at ${PORT}`);
});
