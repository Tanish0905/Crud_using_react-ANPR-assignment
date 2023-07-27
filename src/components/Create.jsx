import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Create = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [image, setImage] = useState("");

	const history = useNavigate();

	const header = { "Access-Control-Allow-Origin": "*" };

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("click");
		axios
			.post("https://64becb165ee688b6250ceeb6.mockapi.io/crudreact", {
				name: name,
				email: email,
				image: image,
				header,
			})
			.then(() => {
				history("/read");
			});
	};

	// const handleChange = (event) => {
	// 	setData({ ...data, [event.target.name]: event.target.value });
	// 	console.log(data);
	// };

	return (
		<>
			<Header />
			<form onSubmit={handleSubmit}>
				<h2>Create</h2>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						name="name"
						className="form-control"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input
						type="email"
						name="email"
						className="form-control"
						aria-describedby="emailHelp"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Image Url</label>
					<br></br>
					<input
						type="text"
						name="image"
						onChange={(e) => setImage(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</>
	);
};

export default Create;
