import { createBrowserRouter, RouterProvider } from "react-router";
import "./css/app.css";
import AppLayOut from "./layOut/AppLayOut";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact, contactData } from "./Pages/Contact";
import { Movie } from "./Pages/Movie";
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesData } from "./api/moviesData";
import { SingleMovieCard } from "./UI/SingleMovieCard";
import { getSingleMovieDetail } from "./api/getSingleMovieDetail";

const ReactMovieWebsite = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayOut />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/movie",
					element: <Movie />,
					loader: getMoviesData,
				},
				{
					path: "/movie/:movieID",
					loader: getSingleMovieDetail,
					element: <SingleMovieCard />,
				},
				{
					path: "/contact",
					action: contactData,
					element: <Contact />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default ReactMovieWebsite;
