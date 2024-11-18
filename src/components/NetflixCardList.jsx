// in the react css file is global file, if i use global css file in the parent jsx file then it's class will be accessible in the all children file.
// global css file import system like this (import "../css/netflix.css";). on the other hand css module file. module file import system like this (import style from "../css/netflix.module.css";)

// if i use css module then Each class will be treated like a property of the object. and it not accessible in the children file, If I want to use then I have to import each file anew.
// and css module And behind the scene css module makes each class unique.(ist beauty of css module)

import style from "../css/netflix.module.css";

export const NetflixCardList = (props) => {
	const { name, img_url, rating, description, cast, genre, watch_url } =
		props.item;

        //! react inline css
	const btnStyle = {
		width: "10rem",
		fontSize: "1rem",
		backgroundColor: `${rating > 8.2 ? "#DB2929" : "#3136BD"}`,
		color: "white",
		borderRadius: "10px",
	};

	return (
		<li className={style.card}>
			<div className={style["card-img"]}>
				<img src={img_url} alt={name} width="40%" height="40%" />
			</div>
			<div className={style["card-content"]}>
				<h2>Name: {name}</h2>
				<h3>Rating:<span className={`${style.rating} ${rating > 8.2 ? style["rating-up"] : style["rating-down"]}`}>{rating}</span></h3>
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
