import netflixSeriesData from "../api/data.json";
import { NetflixCardList } from "./NetflixCardList";

// in the react css file is global file, if i use global css file in the parent jsx file then it's class will be accessible in the all children file.
// global css file import system like this (import "../css/netflix.css";). on the other hand css module file. module file import system like this (import style from "../css/netflix.module.css";)

// if i use css module then Each class will be treated like a property of the object. and it not accessible in the children file, If I want to use then I have to import each file anew.
// and css module And behind the scene css module makes each class unique.(ist beauty of css module)
import style from "../css/netflix.module.css"

export const Netflix = () => {
	return (
		<>
			<div className={style.container}>
				<h1>List of Best Netflix Series</h1>
				<ul className={`${style.grid} ${style["grid-three-clos"]}`}>
					{netflixSeriesData.map((item) => (
						<NetflixCardList item={item} key={item.id} />
					))}
				</ul>
			</div>
		</>
	);
};
