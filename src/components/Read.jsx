import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Pagination from "react-bootstrap/Pagination";

const Read = () => {
	const [data, setData] = useState([]);
	const [pageData, setPageData] = useState([]);

	const [page, setPage] = useState(1);
	const [pageCount, setPageCount] = useState(0);
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

	//handle next
	const handleNext = () => {
		if (page === pageCount) return page;
		setPage(page + 1);
	};

	//handle previous
	const handlePrevious = () => {
		if (page === 1) return page;
		setPage(page - 1);
	};

	useEffect(() => {
		getData();
	}, [page]);

	useEffect(() => {
		const pagedatacount = Math.ceil(data.length / 5); // 5 data per page
		setPageCount(pagedatacount);
		console.log(pagedatacount);

		if (page) {
			const LIMIT = 5;
			const skip = LIMIT * page; // 5* 1 = 5 (page no.)
			const dataSkip = data.slice(page === 1 ? 0 : skip - LIMIT, skip); // shows data between two indexes
			setPageData(dataSkip);
			console.log(pageData);
		}
	}, [data]);

	return (
		<>
			<Header />

			<div className="px-5 py-3 text-center">
				<h3 className="my-4 title"> View Data</h3>
			</div>

			<div className="px-10 py-3 text-center justify-content-center">
				<table className="table px-10">
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
					{pageData.map((eachData, i) => {
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

				<div className="d-flex justify-content-end">
					<Pagination>
						<Pagination.Prev onClick={handlePrevious} disabled={page === 1} />

						{Array(pageCount)
							.fill(null)
							.map((ele, index) => {
								return (
									<>
										<Pagination.Item
											active={page === index + 1 ? true : false}
											onClick={() => setPage(index + 1)}
										>
											{index + 1}
										</Pagination.Item>
									</>
								);
							})}

						<Pagination.Next
							onClick={handleNext}
							disabled={page === pageCount}
						/>
					</Pagination>
				</div>
			</div>
		</>
	);
};

export default Read;
