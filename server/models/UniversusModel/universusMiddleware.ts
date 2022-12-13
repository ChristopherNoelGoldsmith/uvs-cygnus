import { UniversusModel } from "./UniversusModel";
import { checkZone } from "./checkZone";
import AppError from "../../utilities/appError";

export const universusMiddlewareInit = () => {
	checkForProperZonesOnCards();
	ensureValuesHaveRequiredPairs();
};

const checkForProperZonesOnCards = () => {
	return UniversusModel.pre("save", function (next) {
		const ensureProperZoneValues = (zone: string) => {
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
	return UniversusModel.pre("save", function (next) {
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
