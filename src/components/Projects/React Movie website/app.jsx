import { createBrowserRouter, RouterProvider } from "react-router";
import "./css/app.css";
import AppLayOut from "./layOut/AppLayOut";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Movie } from "./Pages/Movie";
import { ErrorPage } from "./Pages/ErrorPage";
import { getMoviesData } from "./api/moviesData";

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
					path: "/contact",
					element: <Contact />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default ReactMovieWebsite;
