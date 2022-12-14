//NODE PACKAGES
const express = require("express");
const path = require("path");
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
///////////////////////////////////////////////////
//IMPORTS
import ENV_VARIABLES from "./utilities/envVars";
import staticRoutes from "./routes/staticRoutes";
import itemsRoutes from "./routes/itemsRoutes";
import decksRoutes from "./routes/decksRoutes";
/* 
///////////////////////////////////////////////////
ENVIRONMENT CONFIGURATION

?@PORT - Default port for the api
?@MODE - Determines weather it is in dev or production mode
*/
const { ROOT, DATABASE, URI_PASSWORD } = ENV_VARIABLES;
console.log(ROOT); //////////////////////////////////////////////////
// --Used to connect mongoose to the NoSQL database--
const URI: string = DATABASE!.replace("%PASSWORD%", URI_PASSWORD!);

if (ENV_VARIABLES.STATUS === "dev") {
	app.use((req: any, res: any, next: any) => {
		res.header("Access-Control-Allow-Origin", "*");
		next();
	});
}

const mongooseConnectionOptions = {};

mongoose
	.connect(URI, mongooseConnectionOptions)
	.then((con) => console.log(`CONNECTION SUCCESSFUL!: ${con}`));

/* 
///////////////////////////////////////////////////
MIDDLEWARE
*/
// MW 1 ) Targets static files to be served
const staticMiddleware: string = express.static(path.join(__dirname, ROOT));
app.use(staticMiddleware);

// ME 2 ) Parses request bodies to be read and used
app.use(bodyParser.json());
///////////////////////////////////////////////////
/*
///////////////////////////////////////////////////
Initiating routes
*/
app.use(staticRoutes);
app.use("/api/v1/items", itemsRoutes);
app.use("/api/v1/decks", decksRoutes);

///////////////////////////////////////////////////
export default app;
