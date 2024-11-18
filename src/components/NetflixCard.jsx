import netflixSeriesData from "../api/data.json";
import { NetflixCardList } from "./NetflixCardList";
import "../css/netflix.css";

export const Netflix = () => {
	return (
		<>
			<div className="container">
				<h1>List of Best Netflix Series</h1>
				<ul className="grid grid-three-clos">
					{netflixSeriesData.map((item) => (
						<NetflixCardList item={item} key={item.id} />
					))}
				</ul>
			</div>
		</>
	);
};

// export const Netflix = () => {
// 	return (
// 		<>
// 		<ul>
// 			{
// 				netflixSeriesData.map((item)=>{
// 					return(
// 						<li key={item.id}>
// 							<img src={item.img} alt="photo" width="40%" height="40%" />
// 							<p>Name: {item.name}</p>
// 							<p>Description: {item.description}</p>
// 							<p>{item.rating}</p>
// 							<button><a href={item.url} target="_blank">watch now</a></button>
// 						</li>
// 					)
// 				})
// 			}
// 		</ul>

// 		</>
// 	);
// };
