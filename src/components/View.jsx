import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const View = () => {
	const [id, setId] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("");
	const navigate = useNavigate();
	console.log(image);

	useEffect(() => {
		setId(localStorage.getItem("id"));
		setName(localStorage.getItem("name"));
		setEmail(localStorage.getItem("email"));
		setImage(localStorage.getItem("image"));
	}, []);

	return (
		<>
			<Header />
			<h2>View</h2>
			<form>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						name="name"
						className="form-control"
						value={name}
						readOnly
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input
						type="email"
						name="email"
						className="form-control"
						aria-describedby="emailHelp"
						value={email}
						readOnly
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">This is Stored Image</label>
					<br />
					<img src={image} alt="img" width="400" height="300" />
				</div>
			</form>
		</>
	);
};

export default View;
