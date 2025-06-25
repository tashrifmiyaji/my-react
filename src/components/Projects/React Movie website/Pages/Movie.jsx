import { useLoaderData } from "react-router";
import { MoviesCard } from "../UI/MoviesCard";

export const Movie = () => {
	const moviesData = useLoaderData();
	// console.log(moviesData);

	return (
		<ul className="container grid grid-four--cols">
			{moviesData &&
				moviesData.Search.map((currMovie) => {
					return <MoviesCard key={currMovie.imdbID} moviesData={currMovie} />;
				})}
		</ul>
	);
};