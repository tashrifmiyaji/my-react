export const NetflixCardList = (props) => {
	const { name, img_url, rating, description, cast, genre, watch_url } =
		props.item;

        //! react inline css
	const btnStyle = {
		width: "10rem",
		fontSize: "1rem",
		backgroundColor: `${rating > 8.2 ? "#DB2929": "#3136BD"}`,
		color: "white",
		borderRadius: "10px",
	};

	return (
		<li className="card">
			<div className="card-img">
				<img src={img_url} alt={name} width="40%" height="40%" />
			</div>
			<div className="card-content">
				<h2>Name: {name}</h2>
				<h3>Rating:<span className={`rating ${rating > 8.2 ? "rating-up": "rating-down"}`} >{rating}</span></h3>
				<p>Description: {description}</p>
				<p>Genre: {genre}</p>
				<p>Cast: {cast}</p>
				<a href={watch_url} target="_blank">
					<button style={btnStyle}> watch now</button>
				</a>
			</div>
		</li>
	);
};
