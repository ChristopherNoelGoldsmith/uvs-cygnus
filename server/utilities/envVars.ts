import dotenv from "dotenv";

dotenv.config({ path: `${__dirname}/../config.env` });
const { ROOT, MOUNT, DATABASE, URI_PASSWORD, STATUS } = process.env;

const ENV_VARIABLES = {
	STATUS,
	ROOT,
	MOUNT,
	DATABASE,
	URI_PASSWORD,
};

console.log(ENV_VARIABLES);

export default ENV_VARIABLES;
