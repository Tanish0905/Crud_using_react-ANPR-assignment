import React from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Update from "./components/Update";
import View from "./components/View";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Create />} path="/" />
				<Route element={<Read />} path="/read" />
				<Route element={<Update />} path="/update" />
				<Route element={<View />} path="/view" />
			</Routes>{" "}
		</BrowserRouter>
	);
};

export default App;
