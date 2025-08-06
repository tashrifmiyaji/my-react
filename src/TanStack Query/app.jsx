import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AppLayOut } from "./layout/AppLayOut";
import { Home } from "./pages/Home";
import { FetchOld } from "./pages/FetchOld";
import { FetchRQ } from "./pages/FetchRQ";
import "./app.css";
import { IndividualCard } from "./UI/individualCard";
import { InfinityScrolling } from "./pages/InfinityScrolling";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayOut />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "trad",
				element: <FetchOld />,
			},
			{
				path: "rq",
				element: <FetchRQ />,
			},
			{
				path: "rq/:id",
				element: <IndividualCard />,
			},
			{
				path: "infinityScrolling",
				element: <InfinityScrolling />,
			},
		],
	},
]);

export const TanStackQuery = () => {
	const queryClint = new QueryClient();

	return (
		<QueryClientProvider client={queryClint}>
			<RouterProvider router={router}></RouterProvider>
			<ReactQueryDevtools initialIsOpen={false}/>
		</QueryClientProvider>
	);
};
