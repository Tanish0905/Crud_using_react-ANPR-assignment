import React from "react";
import { Link } from "react-router-dom";
import Create from "./Create";

const Header = () => {
	return (
		<>
			<Link to="/read">
				<button className="btn btn-primary"> Show Data</button>
			</Link>
			<Link to="/">
				<button className="btn btn-primary"> Add Data</button>
			</Link>
		</>
	);
};

export default Header;
