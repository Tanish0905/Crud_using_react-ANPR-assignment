import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Update = () => {
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

	const handleUpdate = (e) => {
		e.preventDefault();
		console.log("click");
		axios
			.put(`https://64becb165ee688b6250ceeb6.mockapi.io/crudreact/${id}`, {
				name: name,
				email: email,
				image: image,
			})
			.then(() => {
				navigate("/read");
			});
	};

	return (
		<>
			<Header />
			<h2>Update</h2>
			<form onSubmit={handleUpdate}>
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className="mb-3">
					<label className="form-label">Image</label>
					<br />
					<img src={image} alt="img" width="40" height="30" />
				</div>

				<div className="mb-3">
					<label className="form-label">Update Image Url</label>
					<input
						type="text"
						name="image"
						width="40"
						height="30"
						className="form-control"
						onChange={(e) => setImage(e.target.value)}
					/>
				</div>

				<button type="submit" className="btn btn-primary">
					Update
				</button>
			</form>
		</>
	);
};

export default Update;
