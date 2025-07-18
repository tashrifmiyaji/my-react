export const getMoviesData = async () => {
	const api =
		"https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";

	try {
		const response = await fetch(api);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};
