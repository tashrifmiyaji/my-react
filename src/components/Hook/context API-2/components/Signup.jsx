// Signup.jsx
import { useState, useContext } from "react";

import UserContext from "../context/userContext";

function Signup() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");

	const { setUser } = useContext(UserContext);

	const handleFormSubmit = (e) => {
		e.preventDefault();

		setUser({ firstName, lastName, password });
	};

	return (
			<section className="h-[80vh] flex flex-col justify-center items-center p-4">
				<div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
					<h3 className="text-3xl font-bold text-center mb-6 text-gray-800">
						Context API Practice
					</h3>
					<form onSubmit={handleFormSubmit} className="space-y-5">
						<div>
							<label
								htmlFor="firstName"
								className="block text-gray-700 text-sm font-medium mb-1"
							>
								First Name
							</label>
							<input
								type="text"
								id="firstName"
								onChange={(e) => setFirstName(e.target.value)}
								value={firstName}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
								placeholder="Enter first name"
							/>
						</div>
						<div>
							<label
								htmlFor="lastName"
								className="block text-gray-700 text-sm font-medium mb-1"
							>
								Last Name
							</label>
							<input
								type="text"
								id="lastName"
								onChange={(e) => setLastName(e.target.value)}
								value={lastName}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
								placeholder="Enter last name"
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block text-gray-700 text-sm font-medium mb-1"
							>
								Password
							</label>
							<input
								type="password"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
								className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
								placeholder="Enter password"
							/>
						</div>
						<div>
							<button
								type="submit"
								className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 ease-in-out font-semibold text-lg"
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</section>
	);
}

export default Signup;
