//NODE PACKAGES
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const app = express();
///////////////////////////////////////////////////
//IMPORTS
import staticRoutes from "./routes/staticRoutes";
/* 
///////////////////////////////////////////////////
ENVIRONMENT CONFIGURATION

?@PORT - Default port for the api
?@MODE - Determines weather it is in dev or production mode
*/
dotenv.config({ path: `${__dirname}/config.env` });
const { ROOT } = process.env;
///////////////////////////////////////////////////
/* 
///////////////////////////////////////////////////
MIDDLEWARE
*/
const staticMiddleware: string = express.static(path.join(__dirname, ROOT));
app.use(staticMiddleware);
///////////////////////////////////////////////////
/*
///////////////////////////////////////////////////
Initiating routes
*/
app.use(staticRoutes);

///////////////////////////////////////////////////
export default app;
