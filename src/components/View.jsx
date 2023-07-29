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
	const handleBack = () => {
		navigate("/read");
	};

	return (
		<>
			<Header />
			<div className="px-5 py-3 text-center">
				<h3 className="my-4 title"> View Data</h3>
			</div>
			<form>
				<div className="mb-3">
					<label className="form-label update-label">Name</label>
					<input
						type="text"
						name="name"
						className="form-control update-input"
						value={name}
						readOnly
					/>
				</div>

				<div className="mb-3">
					<label className="form-label update-label">Email address</label>
					<input
						type="email"
						name="email"
						className="form-control update-input"
						aria-describedby="emailHelp"
						value={email}
						readOnly
					/>
				</div>

				<div className="mb-3">
					<label className="form-label update-label">
						This is Stored Image
					</label>
					<img
						src={image}
						className="view-img"
						alt="please enter valid image url"
					/>
				</div>

				<div class="flex-parent jc-center">
					<button
						type="button"
						onClick={handleBack}
						className="btn btns  btn-primary"
					>
						Back
					</button>
				</div>
			</form>
		</>
	);
};

export default View;
