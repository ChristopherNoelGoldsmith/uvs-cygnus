/*
SUMMARY )

The server startup an error catches for exemptions not found in appError or other error handling functions

*/

import app from "./app";

const { PORT } = process.env;

process.on("uncaughtException", (err: Error) => {
	console.log(err.name, err.message);
	console.log("UNHANDLED EXEPTION");

	process.exit(1);
});

const server = app.listen(PORT, () => {
	console.log(`Server is listening at ${PORT}`);
});

process.on("unhandledRejection", (err: Error) => {
	console.log(err.name, err.message);
	console.log("UNHANDLED REJECTION");

	server.close(() => {
		process.exit(1);
	});
});

process.on("SIGTERM", () => {
	console.log("sigterm recieved");
	server.close(() => {
		console.log("PROCESS TERMINATED!");
	});
});
