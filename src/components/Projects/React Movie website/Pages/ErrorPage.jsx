import { useNavigate, useRouteError, NavLink } from "react-router";

export const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);

	const navigate = useNavigate();

	const handleGoBack = () => {
		// navigate("/");
		navigate(-1);
	};

	if (error.status === 404) {
		return (
			<section className=" error-section">
				<div id="error-text">
					<figure>
						<img
							className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
							src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDRhcG9rZmZzZ3BxeDc2cXg5ZXhzcTE1Zmw3eXR3MndlNTNmcXR5byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YyKPbc5OOTSQE/giphy.gif"
							alt="404 page"
						/>
					</figure>
					<div>
						<p className="p-a">
							. The page you were looking for could not be found
						</p>
						<p className="p-b">... Back to previous page</p>
					</div>
				</div>
				<NavLink to="/" className="btn">
					Go Back To HomePage
				</NavLink>
				<button className="btn mb-10" onClick={handleGoBack}>
					Go Back
				</button>
			</section>
		);
	}

	return <h1> Something is wrong!</h1>;
};
