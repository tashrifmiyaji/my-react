import { useInfiniteQuery } from "@tanstack/react-query";
import { getUsers } from "../api/api";
import { useEffect } from "react";

export const InfinityScrolling = () => {
	const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage, isLoading } =
		useInfiniteQuery({
			queryKey: ["users"],
			queryFn: getUsers,
			getNextPageParam: (lastPage, allPage) => {
				return lastPage.data.length === 10
					? allPage.length + 1
					: undefined;
			},
		});

	console.log(data);

	const handleScrolling = () => {
		const bottom =
			window.innerHeight + window.scrollY >=
			document.documentElement.scrollHeight - 1;

		if (bottom && hasNextPage) {
			fetchNextPage();
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScrolling);
		return () => removeEventListener("scroll", handleScrolling);
	}, [hasNextPage]);

	if (isLoading) return <h1 className="text-center">loading...</h1>;

	return (
		<div className="p-10">
			<h1 className="text-center">Infinity Scrolling</h1>

			{data?.pages?.map((page, index) => (
				<ul key={index}>
					{page?.data.map((user) => (
						<li key={user.id}>
							<p>{user.login}</p>
							<img
								src={user.avatar_url}
								alt={user.login}
								width={50}
								height={50}
							/>
						</li>
					))}
				</ul>
			))}
			{isFetchingNextPage && <h1 className="text-center">Loading...</h1>}
		</div>
	);
};
