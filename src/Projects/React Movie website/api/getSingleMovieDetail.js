export const getSingleMovieDetail = async ({ params }) => {
	const id = params.movieID;

	const api = `https://www.omdbapi.com/?i=${id}&apikey=1c12799f`;

	try {
		const response = await fetch(api);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
