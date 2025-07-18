import { useEffect, useReducer, useState } from "react";
import { getPost, deletePost } from "../API/apiService";
import { Form } from "./Form";

export const Posts = () => {
	// handle get data
	const initialValue = {
		data: [],
	};

	const reducer = (state, action) => {
		switch (action.type) {
			case "SET_DATA":
				return {
					...state,
					data: action.payLoad,
				};
			case "UPDATE_DATA":
				return {
					...state,
					data: state.data.map((curData) => {
						return curData.id === action.payLoad.id
							? action.payLoad
							: curData;
					}),
				};
			default:
				return state;
		}
	};

	const [state, dispatch] = useReducer(reducer, initialValue);
	const [updateData, setUpdateData] = useState({});

	const getData = async () => {
		try {
			const res = await getPost();
			dispatch({ type: "SET_DATA", payLoad: res.data });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	// handle delete data
	const handleDelete = async (id) => {
		try {
			const res = await deletePost(id);
			const status = res.status;
			console.log(res);

			if (status === 200) {
				const newUpdatedData = state.data.filter((curData) => {
					return curData.id !== id;
				});
				dispatch({ type: "SET_DATA", payLoad: newUpdatedData });
			} else {
				console.log("Failed to delete Post", status);
			}
		} catch (error) {
			console.log(error);
		}
	};
	// Handle Update Post
	const handleUpdatePost = (curData) => setUpdateData(curData);

	return (
		<>
			<section className="form-section">
				<Form
					state={state}
					dispatch={dispatch}
					updateData={updateData}
					setUpdateData={setUpdateData}
				/>
			</section>
			<section className="post-section">
				<ol>
					{state.data &&
						state.data.map((curData) => {
							const { id, title, body } = curData;
							return (
								<li key={id}>
									<p>{id}.</p>
									<p>Title: {title}</p>
									<p>Body: {body}</p>
									<button
										onClick={() =>
											handleUpdatePost(curData)
										}
									>
										Edit
									</button>
									<button
										className="btn-delete"
										onClick={() => handleDelete(id)}
									>
										Delete
									</button>
								</li>
							);
						})}
				</ol>
			</section>
		</>
	);
};
