/*
////////
PURPOSE

The purpose of this component is to provide a reusable dropdown menu for various uses outside of the navbar
////////
!DEPENDANCIES
* gsm.scss
*/

import "./ExpandableMenu.scss";
import React, { useState } from "react";

interface ExpandableMenuProps {
	children: React.ReactNode;
	name: string;
	height: number;
	default?: "open" | "closed";
	id?: string;
	className?: string[];
}

const ExpandableMenu: React.FC<ExpandableMenuProps> = (props) => {
	const [expansion, setExpansion] = useState<boolean>(() => {
		if (props.default === "closed" || props.default === undefined) {
			return false;
		} else {
			return true;
		}
	});

	const menuExpansionHandler = (): void => {
		// USE ) Intended to handle the dropdown toggle of the menu.
		setExpansion((exp) => !exp);
		return;
	};

	return (
		<section
			id={props.id}
			className={`menu-container ${
				props.className && props.className.join(" ")
			}`}
		>
			<button
				className={`expandable-text-title fill-x relative ${
					props.className ? props.className : " bg-color-white"
				}`}
				onClick={menuExpansionHandler}
				type="button"
			>
				<div className="absolute-top-left fill bg-horz-grad-grey bg-translucent"></div>
				<h4 className="">{props.name}</h4>
			</button>

			<div
				style={{ height: `${expansion ? props.height + "px" : "0px"}` }}
				className={`expandable-menu`}
			>
				{props.children}
			</div>
		</section>
	);
};

export default ExpandableMenu;
