import "./sass/app.scss";

const App = (): void => {
	const paragraph = document.createElement("p") as HTMLParagraphElement;
	paragraph.textContent = "WELCOME TO THE TS TEMPLATE ENVIRONMENT";

	document.querySelector("#app")!.appendChild(paragraph);
};

export default App;
