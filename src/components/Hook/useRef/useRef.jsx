import { useRef } from "react";

export const UseRef = () => {
	const username = useRef(null);
	const password = useRef(null);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		console.log(username.current, password.current.value);
	};

	return (
		<>
			<section>
				<header>
					<h1 className="text-center">Use Ref Hook</h1>
				</header>
				<div className="h-screen w-full flex justify-center mt-16">
					<form onSubmit={handleFormSubmit}>
						<div>
							<label htmlFor="username">username : </label>
							<input type="text" id="username" ref={username}/>
						</div>
						<br />
						<div>
							<label htmlFor="password"> password : </label>
							<input type="password" id="password" ref={password}/>
						</div>
						<br />
						<div>
							<button
								type="submit"
								className="bg-green-500 w-20 h-8 ml-28"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};
