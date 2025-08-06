// AppLayOut
import { Header } from "../UI/Header";
import { Footer } from "../UI/Footer";
import { Loader } from "../UI/Loader";
import { Outlet, useNavigation } from "react-router";
export const AppLayOut = () => {
	const loading = useNavigation();

	if ((loading.state === "loading")) {
		return <Loader />
	}

	return (
		<div className="app-layout">
			<Header />
			<main className="content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
