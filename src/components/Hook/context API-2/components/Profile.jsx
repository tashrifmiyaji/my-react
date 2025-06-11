// Profile.jsx
import { useContext } from "react";
import UserContext from "../context/userContext";

const Profile = () => {
	const { user } = useContext(UserContext);

	if (!user) {
		return (
			<div className=" p-6 rounded-lg shadow-md text-center">
				<h3 className="text-xl font-semibold text-gray-50">
					Please sign up or log in
				</h3>
			</div>
		);
	}

	return (
		<div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg shadow-xl text-center">
			<h1 className="text-4xl font-extrabold mb-2">
				Welcome {user.firstName} {user.lastName}!
			</h1>
			<p className="text-lg opacity-90">
				You are successfully logged in using Context API.
			</p>
		</div>
	);
};

export default Profile;
