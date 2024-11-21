export const NetflixCardList = (props) => {
	const { name, img_url, rating, description, cast, genre, watch_url } =
		props.item;

        //! react inline css
	const btnStyle = {
		width: "10rem",
		fontSize: "1rem",
		backgroundColor: `${rating > 8.2 ? "#be123c" : "#1d4ed8"}`,
		color: "white",
		borderRadius: "10px",
	};

	return (
		<li className="w-80 shadow-2xl shadow-gray-900">
			<div>
				<img className="size-full" src={img_url} alt={name} width="40%" height="40%" />
			</div>
			<div className="flex flex-col gap-4 p-4">
				<h2>Name: {name}</h2>
				<h3>Rating:<span className={`italic px-4 rounded-lg ${rating > 8.2 ? "bg-rose-700" : "bg-blue-700"}`}> {rating}</span></h3>
				<p>Description: {description}</p>
				<p>Genre: {genre}</p>
				<p>Cast: {cast}</p>
				<div className="flex justify-center" >
					<a href={watch_url} target="_blank">
					<button style={btnStyle}> watch now</button></a>
				</div>
			</div>
		</li>
	);
};
