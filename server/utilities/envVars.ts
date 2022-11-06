import dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../config.env` });
const { ROOT, MOUNT, DATABASE, URI_PASSWORD } = process.env;

const ENV_VARIABLES = {
	ROOT,
	MOUNT,
	DATABASE,
	URI_PASSWORD,
};

console.log(ENV_VARIABLES);

export default ENV_VARIABLES;
