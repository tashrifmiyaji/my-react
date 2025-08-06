import axios from "axios";

const api = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

// for tred
export const getPostForOld = () => {
	return api.get(`/posts`);
};

// for rq
export const getPost = (pageNumber) => {
	return api.get(`/posts?_start=${pageNumber}&_limit=3`);
};

// for individual
export const getIndividualPost = (id) => api.get(`/posts/${id}`);

// delete data 
export const deletePostData = async (id) => {
	return await api.delete(`/posts/${id}`)
}

// PUT or PATCH request for updating post
export const updatePostData = async ({ id, updatedData }) => {
	return await api.patch(`/posts/${id}`, updatedData);
};


// get user for infinity scrolling
export const getUsers = async ({ pageParam = 1 }) => {
  return await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`);
};