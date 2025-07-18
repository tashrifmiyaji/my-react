// external imports
import { createBrowserRouter, RouterProvider } from "react-router";

// internal imports
import "./app.css";
import { Home } from "./src/pages/Home";
import { About } from "./src/pages/About";
import { Country } from "./src/pages/Country";
import { Contact } from "./src/pages/Contact";
import { AppLayOut } from "./src/Components/layOut/AppLayOut";
import { ErrorPage } from "./src/pages/ErrorPage";
import { CountryIndividualCard } from "./src/Components/layOut/CountryIndividualCard";

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
				path: "about",
				element: <About />,
			},
			{
				path: "country",
				element: <Country />,
			},
			{
				path: "country/:id",
				element: <CountryIndividualCard/>
			},
			{
				path: "contact",
				element: <Contact />,
			},
		],
	},
]);

const WorldExplore = () => {
	return <RouterProvider router={router}></RouterProvider>;
};

export default WorldExplore;
