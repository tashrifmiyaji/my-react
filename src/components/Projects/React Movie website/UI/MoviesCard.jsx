import "../css/moviesCard.css";

export const MoviesCard = ({moviesData}) => {

    const { Poster, imdbID} = moviesData

	return (
		<li className="hero-container">
			<div className="main-container">
				<div className="poster-container">
					<img src={Poster} className="poster" alt={imdbID} />
				</div>
				<div className="ticket-container">
					<div className="ticket__content">
							<button className="ticket__buy-btn">
								Watch now
							</button>
					</div>
				</div>
			</div>
		</li>
	);
};
