import axios from "axios";

const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

// get method
export const getPost = () => {
	return api.get("/posts");
};

// delete method
export const deletePost = (id) => {
	return api.delete(`/posts/${id}`);
};

// post method
export const addPost = (post) => {
	return api.post("/posts", post);
};

// put method
export const updatePost = (id, updatedPost) => {
	return api.put(`/posts/${id}`, updatedPost);
};
