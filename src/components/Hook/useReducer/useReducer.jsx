import { useReducer } from "react";

export const UseReducerCom = () => {
	const reducer = (state, actions) => {
		console.log(state, actions);

		if (actions.btnType === "increment") return state + 1;
		if (actions.btnType === "decrement") return state - 1;
	};

	const [count, disPatch] = useReducer(reducer, 0);

	return (
		<>
			<div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
				<h1>useReducer</h1>
				<h2>{count}</h2>
				<button
					type="button"
					className="bg-lime-300 hover:bg-lime-900 text-stone-950 w-24 h-8 ring-2 ring-fuchsia-600 rounded-lg"
					onClick={(e) => disPatch({ btnType: "increment" })}
				>
					Increment
				</button>
				<button
					type="button"
					className="bg-lime-300 hover:bg-lime-900 text-stone-950 w-24 h-8 ring-2 ring-fuchsia-600 rounded-lg"
					onClick={(e) => disPatch({ btnType: "decrement" })}
				>
					Decrement
				</button>
			</div>
		</>
	);
};
