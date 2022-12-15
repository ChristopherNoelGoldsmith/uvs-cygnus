import React from "react";
import ProductEditor from "../adminTools/ProductEditor/ProductEditor";

const AdminPage: React.FC = () => {
	return (
		<section className="bg-color-red fill-page">
			<section className="flex fill column-xs bg-color-white">
				<h2 className="font-size-1 fill-x font f-center">{"Add"}</h2>
				<ProductEditor />
			</section>
		</section>
	);
};

export default AdminPage;
