/* eslint-disable react/prop-types */
import { NavLink, useLoaderData } from "react-router-dom";
import "../css/moviesCard.css";

export const SingleMovieCard = () => {
	const singleMovieData = useLoaderData();
	console.log(singleMovieData);

	const {
		Actor,
		Poster,
		Title,
		Runtime,
		Genre,
		Type,
		Year,
		Plot,
		BoxOffice,
		imdbID,
		Awards,
		imdbRating,
	} = singleMovieData;

	const totalMinute = Runtime.replace("min", "");
	const hours = Math.floor(totalMinute / 60);
	const minutes = totalMinute % 60;
	const formattedTime = `${hours}hr ${minutes}min`;

	return (
		<li className="hero-container hero-movie-container">
			<div className="main-container">
				<figure className="movie">
					<div className="movie__hero">
						<img src={Poster} alt="Rambo" className="movie__img" />
					</div>
					<div className="movie__content">
						<div className="movie__title">
							<h1 className="heading__primary">
								{Title} <i className="fas fa-fire"></i>
							</h1>
							<div className="movie__tag movie__tag--1">{`#${Type}`}</div>
							<div className="movie__tag movie__tag--2">
								Year: {Year}
							</div>
						</div>
						<p className="movie__description">{Plot}</p>
						<br />
						<p className="movie__description">Awards: {Awards}</p>
						<div className="movie__details">
							<p className="movie__detail">
								<span className="icons icons-red">
									<i className="fas fa-camera-retro"></i>
								</span>
								Rating: {imdbRating}
							</p>
							<p className="movie__detail">
								<span className="icons icons-grey">
									<i className="fas fa-clock"></i>
								</span>
								{formattedTime}
							</p>
							<p className="movie__detail">
								<span className="icons icons-yellow">
									<i className="fas fa-file-invoice-dollar"></i>
								</span>
								{BoxOffice}
							</p>
						</div>
						<div>
							<NavLink
								to="/movie"
								className="movie__tag movie__tag--2"
								style={{
									textAlign: "center",
									fontSize: "1.6rem",
								}}
							>
								Go Back
							</NavLink>
						</div>
					</div>
					<div className="movie__price">{BoxOffice}</div>
				</figure>
			</div>
		</li>
	);
};
