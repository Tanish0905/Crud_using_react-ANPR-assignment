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

	const handleBack = () => {
		history("/read");
	};

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
			<div className="main">
				<div className="px-5 py-3 text-center">
					<h3 className="my-4 title"> Add Data</h3>
				</div>
				<form onSubmit={handleSubmit}>
					<div className="mb-3 ">
						<label className="form-label update-label">Name:-</label>
						<input
							type="text"
							name="name"
							className="update-input"
							value={name}
							required
							onChange={(e) => setName(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label className="form-label update-label">Email address:-</label>
						<input
							type="email"
							name="email"
							className="update-input"
							required
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>

					<div className="mb-3">
						<label className="form-label update-label">Image Url:-</label>
						<input
							type="text"
							required
							name="image"
							className="update-input"
							onChange={(e) => setImage(e.target.value)}
						/>
					</div>

					<div class="flex-parent jc-center">
						<button type="submit" className="btn btns btn-primary">
							Add Data
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
			</div>
		</>
	);
};

export default Create;
