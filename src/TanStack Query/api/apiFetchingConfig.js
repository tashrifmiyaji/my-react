import { getPost, getIndividualPost } from "./api";

export const getPOstData = async (pageNumber) => await getPost(pageNumber);

// export const getPOstData = async () => {
// 	try {
// 		const res = await getPost();
// 		return res.status === 200 ? res : [];
// 	} catch (error) {
// 		console.log(error);
// 		return [];
// 	}
// };


// for individual Card
export const getIndividualPostDada = async (id) => await getIndividualPost(id);
