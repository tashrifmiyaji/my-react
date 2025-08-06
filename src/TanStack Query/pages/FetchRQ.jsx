import {
	keepPreviousData,
	useQuery,
	useMutation,
	useQueryClient,
} from "@tanstack/react-query";
import { getPOstData } from "../api/apiFetchingConfig.js";
import { deletePostData, updatePostData } from "../api/api.js";

import { Loader } from "../UI/Loader";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const FetchRQ = () => {
	const [pageNumber, setPageNumber] = useState(0);
	// for update
	const [editingPostId, setEditingPostId] = useState(null);
	const [editedTitle, setEditedTitle] = useState("");
	const [editedBody, setEditedBody] = useState("");

	const queryClient = useQueryClient();

	// get data
	const { data, isPending, isError, error } = useQuery({
		queryKey: ["posts", pageNumber],
		queryFn: () => getPOstData(pageNumber),
		// gcTime: 1000000,
		// staleTime: 20000,
		// refetchInterval: 2000,
		// refetchIntervalInBackground: true
		placeholderData: keepPreviousData,
	});

	// delete data
	const deleteMutation = useMutation({
		mutationFn: (id) => deletePostData(id),

		// in onSuccess tha second parameter is the argument of deleteMutation.mutate(id);
		onSuccess: (data, id) => {
			// queryClient.setQueryData() is for the get cash data.
			queryClient.setQueryData(["posts", pageNumber], (curData) => {
				return {
					...curData,
					data: curData.data.filter((post) => post.id !== id),
				};
			});
		},
	});

	// update data
	const updateMutation = useMutation({
		mutationFn: ({ id, updatedData }) =>
			updatePostData({ id, updatedData }),
		onSuccess: (data, variables) => {
			// Local Cache update
			queryClient.setQueryData(["posts", pageNumber], (oldData) => {
				return {
					...oldData,
					data: oldData.data.map((post) =>
						post.id === variables.id
							? { ...post, ...variables.updatedData }
							: post
					),
				};
			});
			// Edit mode off
			setEditingPostId(null);
		},
	});

	// Handle delete button
	const handleDeleteBtn = (id) => {
		deleteMutation.mutate(id);
	};

	// Handle Edit Button
	const handleEditBtn = (e, id) => {
		const currentPost = data.data.find((post) => post.id === id);
		setEditingPostId(id);
		setEditedTitle(currentPost.title);
		setEditedBody(currentPost.body);
	};

	// Handle Pagination
	const handlePagination = (e) => {
		e.currentTarget.textContent === "Next"
			? setPageNumber((prev) => prev + 3)
			: setPageNumber((prev) => prev - 3);
	};

	if (isPending)
		return (
			<div className="flex w-screen h-screen justify-center items-center">
				<Loader />
			</div>
		);
	if (isError) return <p>Error: {error.message || "Something is wrong!"}</p>;

	return (
		<div>
			<ul className="section-accordion">
				<h1>FetchRQ</h1>
				{data?.data.map((curData) => {
					const isEditing = editingPostId === curData.id;

					return (
						<li key={curData.id}>
								{isEditing ? (
									<>
										<input
											type="text"
											value={editedTitle}
											onChange={(e) =>
												setEditedTitle(e.target.value)
											}
											placeholder="Update Title"
										/>
										<textarea
											value={editedBody}
											onChange={(e) =>
												setEditedBody(e.target.value)
											}
											placeholder="Update Body"
										/>
									</>
								) : (
									<NavLink to={`/rq/${curData.id}`}>
										<p>{curData.id}.</p>
										<p>Title: {curData.title}</p>
										<p>Body: {curData.body}</p>
									</NavLink>
								)}

							{isEditing ? (
								<button
									type="button"
									className="active-btn"
									onClick={() => {
										updateMutation.mutate({
											id: curData.id,
											updatedData: {
												title: editedTitle,
												body: editedBody,
											},
										});
									}}
								>
									Save
								</button>
							) : (
								<>
									<button
										type="button"
										onClick={() =>
											handleDeleteBtn(curData.id)
										}
									>
										Delete
									</button>
									<button
										type="button"
										onClick={(e) =>
											handleEditBtn(e, curData.id)
										}
									>
										Edit
									</button>
								</>
							)}
						</li>
					);
				})}
			</ul>
			<div className="flex gap-4">
				<button
					type="button"
					onClick={handlePagination}
					disabled={pageNumber === 0 ? true : false}
				>
					Previous
				</button>
				<h3>{pageNumber / 3 + 1}</h3>
				<button
					type="button"
					className="mb-1"
					onClick={(e) => handlePagination(e)}
				>
					Next
				</button>
			</div>
		</div>
	);
};
