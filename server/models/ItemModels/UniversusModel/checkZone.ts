export const checkZone = (blockOrAttackZone: string): boolean => {
	if (
		blockOrAttackZone === "high" ||
		blockOrAttackZone === "mid" ||
		blockOrAttackZone === "low"
	) {
		return true;
	}

	return false;
};
