import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { Link } from "react-router-dom";
import "../App.css";

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

	const handleBack = () => {
		navigate("/read");
	};

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
			<div className="px-5 py-3 text-center ">
				<h3 className="my-4 title"> Update Data</h3>
			</div>

			<form onSubmit={handleUpdate}>
				<div className="mb-3  ">
					<label className="form-label update-label ">Name </label>
					<input
						type="text"
						name="name"
						className="update-input"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className="mb-3 ">
					<label className="form-label update-label">Email address</label>
					<input
						type="email"
						name="email"
						className="update-input"
						aria-describedby="emailHelp"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				{/* <div className="mb-3">
					<label className="form-label update-label">Image</label>
					<br />
					<img
						className="update-input"
						src={image}
						alt="img"
						width="400"
						height="300"
					/>
				</div> */}

				<div className="mb-3">
					<label className="form-label update-label"> Image Url</label>
					<input
						type="text"
						name="image"
						className="update-input"
						value={image}
						onChange={(e) => setImage(e.target.value)}
					/>
				</div>

				<div class="flex-parent jc-center">
					<button type="submit" className="btn btns  btn-primary">
						Update Data
					</button>
					<button
						type="button"
						onClick={handleBack}
						className="btn btns btn-primary"
					>
						back
					</button>
				</div>
			</form>
		</>
	);
};

export default Update;
