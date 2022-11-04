import React from "react";

interface ImageWithOverlayProps {
	image: string;
	name: string;
	description: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = (props) => {
	return (
		<figure className="flex column relative">
			<img className="layer-default" id={props.name} src={props.image} alt="" />
			<div className="flex space-between column hover-appear layer-front absolute-top-left fill">
				<label
					htmlFor={props.name}
					className="fill-x font f-center f-size-2 bold"
				>
					{props.name}
				</label>
				<p className="pad2">{props.description}</p>
				<div className="fill bg-color-white bg-translucent absolute-top-left layer-back" />
				<div className="fill bg-horz-grad-grey absolute-top-left layer-back" />
				<div className="fill-x flex row gap-1 pad1 space-between button-container bg-color-black">
					<button className="btn b-hover-grey bg-color-green">Add</button>
					<button className="btn b-hover-grey bg-color-red">Remove</button>
					<button className="btn b-hover-grey">Details</button>
				</div>
			</div>
		</figure>
	);
};

export default ImageWithOverlay;
