import React, { ChangeEventHandler, ChangeEvent } from "react";
import ProductEditor from "../adminTools/ProductEditor/ProductEditor";
import FormComponent from "../hooks/useInput/FormComponent";
import InputComponent from "../hooks/useInput/InputComponent";

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
