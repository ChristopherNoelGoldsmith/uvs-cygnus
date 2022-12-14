import { UniversusModel } from "./UniversusModel";
import ItemsModel from "../ItemModel";
import { checkZone } from "./checkZone";
import AppError from "../../../utilities/appError";

const checkForProperZonesOnCards = () => {
	return UniversusModel.pre("save", function (next): void {
		const ensureProperZoneValues = (zone: string): void => {
			if (zone) {
				if (!checkZone(zone)) {
					throw new AppError({
						statusCode: 405,
						message: "Attack and block zones must be 'high', 'mid', or 'low'",
					});
				}
			}
		};

		if (this.blockZone) ensureProperZoneValues(this.blockZone);
		if (this.attackZone) ensureProperZoneValues(this.attackZone);

		next();
	});
};
const ensureValuesHaveRequiredPairs = () => {
	return UniversusModel.pre("save", function (next): void {
		if (
			(this.blockMod && !this.blockZone) ||
			(!this.blockMod && this.blockZone) ||
			(!this.damage && this.attackZone) ||
			(this.damage && !this.attackZone)
		)
			throw new AppError({
				statusCode: 405,
				message:
					"If you must have a block mod AND a block zone or damage AND an attack zone",
			});
		next();
	});
};

//TODO: Change to value
const checkForDuplicateName = () => {
	return UniversusModel.pre("validate", async function (next) {
		const checkIfNameTaken = await ItemsModel.findItemByParam({
			name: this.name,
		});
		if (checkIfNameTaken.length !== 0) {
			throw new AppError({
				statusCode: 400,
				message: "This name is already taken!",
			});
		}
		next();
	});
};

const universusMiddlewareInit = () => {
	checkForProperZonesOnCards();
	ensureValuesHaveRequiredPairs();
	checkForDuplicateName();
};
export default universusMiddlewareInit;
