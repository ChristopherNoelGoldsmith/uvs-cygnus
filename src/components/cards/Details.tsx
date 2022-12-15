import React from "react";
import { DUMMY_DATA } from "./../../assets/images.js";
const getStats = () => {
	const stats: any = DUMMY_DATA.endevor.stats;
	const result: React.ReactNode[] = [];
	const keys: string[] = Object.keys(stats);
	keys.forEach((key: string) => {
		let content: string | number = stats[key];

		if (typeof content === "string") content = content.toUpperCase();

		const fart = (
			<li className="pad1" key={Math.random() * 100000}>
				<span>{key}</span>
				<span> {content}</span>
			</li>
		);
		result.push(fart);
	});

	return result;
};

const Details = () => {
	return (
		<section className="card bg bg-color-white flex row-xs pad3">
			<div className="flex column-xs">
				<label className="font f-size-2" htmlFor="img">
					{DUMMY_DATA.endevor.name}
				</label>
				<p className="max-width-sm pad2">{DUMMY_DATA.endevor.abilities}</p>
				<div className={"flex row-xs"}>
					<ul className="flex row-xs">{getStats()}</ul>
				</div>
			</div>
			<img className="card shadow" src={DUMMY_DATA.endevor.imgURL} alt="" />
		</section>
	);
};

export default Details;
