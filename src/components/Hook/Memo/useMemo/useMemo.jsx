import { useReducer } from "react";

import { ExclusiveCom } from "./exclusiveComponent";

export const UseMemo = () => {
	const initialValues = {
		count: 0,
	};

	const reducer = (state, action) => {
		if (action.type === "INCREMENT") {
			return { ...state, count: state.count++ };
		}
	};

	const [state, disPatch] = useReducer(reducer, initialValues);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans antialiased">
			<div className="bg-purple-600 p-8 rounded-xl shadow-lg flex flex-col items-center space-y-6 max-w-md w-full">
				{/* ExclusiveCom component rendered here */}
				<ExclusiveCom />
				<button
					type="button"
					className="px-6 py-3 bg-lime-600 text-white font-semibold rounded-lg shadow-md hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out text-lg"
					onClick={() => disPatch({ type: "INCREMENT" })}
				>
					Re-render Parent
				</button>
				<h3 className="text-xl font-medium text-gray-800">
					Parent Re-renders:
					<span className="font-bold text-gray-50">
						{state.count}
					</span>
					times
				</h3>
			</div>
		</div>
	);
};
