import { Outlet, useNavigation } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Loading } from "./Loading";

const AppLayOut = () => {
	const loading = useNavigation();

	if (loading.state === "loading") return <Loading />;

	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default AppLayOut;
