import { useEffect, useState } from "react";
import { addPost, updatePost } from "../API/apiService";

export const Form = ({ state, dispatch, updateData, setUpdateData }) => {
	// handle post data
	const [addData, setAddData] = useState({
		title: "",
		body: "",
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setAddData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	const addPostData = async () => {
		try {
			const res = await addPost(addData);
			setAddData({ title: "", body: "" });
			console.log("response: ", res);

			if (res.status === 201) {
				const lastId =
					state.data.length > 0
						? state.data[state.data.length - 1].id
						: 0;
				const newPost = {
					...res.data,
					id: lastId + 1,
				};
				dispatch({
					type: "SET_DATA",
					payLoad: [...state.data, newPost],
				});
			} else {
				console.log("Failed to post data!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const action = e.nativeEvent.submitter.value;

		if (action === "Add") {
			addPostData();
		} else if (action === "Edit") {
			updatePostData();
		}
	};

	// handle update data
	useEffect(() => {
		updateData &&
			setAddData({
				title: updateData.title || "",
				body: updateData.body || "",
			});
	}, [updateData]);

	const updatePostData = async () => {
		try {
			const res = await updatePost(updateData.id, addData);
			if (res.status === 200) {
				dispatch({ type: "UPDATE_DATA", payLoad: res.data });
				setAddData({ title: "", body: "" });
				setUpdateData({});
			}
		} catch (error) {
			console.log(error);
		}
	};

	const isUpdateDataEmpty = Object.keys(updateData).length === 0;

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="title"></label>
				<input
					type="text"
					autoComplete="off"
					id="title"
					name="title"
					value={addData.title}
					placeholder="Add Title"
					onChange={handleInput}
				/>
			</div>
			<div>
				<label htmlFor="title"></label>
				<input
					type="text"
					autoComplete="off"
					id="body"
					name="body"
					value={addData.body}
					placeholder="Add Post"
					onChange={handleInput}
				/>
			</div>
			<button type="submit" value={isUpdateDataEmpty ? "Add" : "Edit"}>
				{isUpdateDataEmpty ? "Add" : "Edit"}
			</button>
		</form>
	);
};
