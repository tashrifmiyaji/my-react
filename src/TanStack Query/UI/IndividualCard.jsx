import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router";
import { getIndividualPostDada } from "../api/apiFetchingConfig.js";

// individual card
export const IndividualCard = () => {
	const params = useParams();

	const { data } = useQuery({
		queryKey: ["post"],
		queryFn: () => getIndividualPostDada(params.id),
	});

	return (
		<div>
			<div className="section-accordion">
				<h1>Post Id Number - {data?.data.id} </h1>
				<p>Title: {data?.data.title} </p>
				<p>Body: {data?.data.body} </p>
			<NavLink to={"/rq"}>
				<button type="button">Go Back</button>
			</NavLink>
			</div>
		</div>
	);
};
