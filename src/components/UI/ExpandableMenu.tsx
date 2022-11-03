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
	id?: string;
	className?: string[];
}

const ExpandableMenu: React.FC<ExpandableMenuProps> = (props) => {
	const [expansion, setExpansion] = useState<boolean>(false);

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
			<label onClick={menuExpansionHandler}>{props.name}</label>

			<div className={`expandable-menu ${expansion ? "max" : "min"}`}>
				{props.children}
			</div>
		</section>
	);
};

export default ExpandableMenu;
