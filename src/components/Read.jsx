import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Read = () => {
	const [data, setData] = useState([]);

	const navigate = useNavigate();

	function getData() {
		axios
			.get("https://64becb165ee688b6250ceeb6.mockapi.io/crudreact")
			.then((res) => {
				setData(res.data);
				console.log(res.data);
			});
	}
	useEffect(() => {
		getData();
	}, []);

	function handleDelete(id) {
		axios
			.delete(`https://64becb165ee688b6250ceeb6.mockapi.io/crudreact/${id}`)
			.then(() => {
				getData();
			});
	}

	const setToLocalStorage = (id, name, email, image) => {
		localStorage.setItem("id", id);
		localStorage.setItem("name", name);
		localStorage.setItem("email", email);
		localStorage.setItem("image", image);
	};

	return (
		<>
			<Header />
			<h2>Read Operation</h2>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Edit</th>
						<th scope="col">View</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				{data.map((eachData) => {
					return (
						<tbody>
							<tr>
								<td scope="row">{eachData.id}</td>
								<td>{eachData.name}</td>
								<td>{eachData.email}</td>
								<td>
									<Link to="/update">
										<button
											className="btn btn-success"
											onClick={() =>
												setToLocalStorage(
													eachData.id,
													eachData.name,
													eachData.email,
													eachData.image
												)
											}
										>
											Edit
										</button>
									</Link>
								</td>
								<td>
									<Link to="/view">
										<button
											className="btn btn-info"
											onClick={() =>
												setToLocalStorage(
													eachData.id,
													eachData.name,
													eachData.email,
													eachData.image
												)
											}
										>
											View
										</button>
									</Link>
								</td>

								<td>
									<button
										className="btn btn-danger"
										onClick={() => handleDelete(eachData.id)}
									>
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					);
				})}
			</table>
		</>
	);
};

export default Read;
