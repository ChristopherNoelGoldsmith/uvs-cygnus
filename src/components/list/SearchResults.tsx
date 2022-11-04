import React from "react";
import { DUMMY_DATA } from "../../assets/images";
import ImageWithOverlay from "../UI/ImageWithOverlay";

const SearchResults: React.FC = () => {
	return (
		<section className="flex row-xs fill-x pad1">
			<ul className="flex row-xs gap-1">
				<li>
					<ImageWithOverlay
						name={DUMMY_DATA.endevor.name}
						image={DUMMY_DATA.endevor.imgURL}
						description={DUMMY_DATA.endevor.abilities}
					/>
				</li>
			</ul>
		</section>
	);
};

export default SearchResults;
