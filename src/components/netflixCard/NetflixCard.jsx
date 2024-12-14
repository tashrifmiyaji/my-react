import netflixSeriesData from "../../api/data.json";
import { NetflixCardList } from "./NetflixCardList";

export const Netflix = () => {
	return (
		<>
			<h1 className="text-center text-4xl pt-3 pb-3 border-b-2 border-b-stone-950	">List of Best Netflix Series</h1>
			<div className="flex justify-center items-center mt-8 mb-10">
				<ul className="grid gap-[9.6rem] grid-cols-3">
					{netflixSeriesData.map((item) => (
						<NetflixCardList item={item} key={item.id} /> 
					))}
				</ul>
			</div>
		</>
	);
};
