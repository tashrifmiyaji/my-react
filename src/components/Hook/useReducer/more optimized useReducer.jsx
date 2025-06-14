import { useReducer } from "react";

export const MoreOptimizedUseReducerCom = () => {
	const initialStates = {
		count: 0,
		increment: 2,
		decrement: 2,
	};

	const reducer = (states, actions) => {
		switch (actions.btnType) {
			case "INCREMENT":
				return { ...states, count: states.count + states.increment };

			case "DECREMENT":
				return { ...states, count: states.count - states.decrement };

			case "RESET":
				return { ...states, count: 0 };

			default:
				return states;
		}
	};

	const [states, disPatch] = useReducer(reducer, initialStates);
	return (
		<>
			<div className="w-screen h-screen flex flex-col justify-center items-center gap-4">
				<h1>useReducer</h1>
				<h2>{states.count}</h2>
				<button
					type="button"
					className="bg-lime-300 hover:bg-lime-900 text-stone-950 w-24 h-8 ring-2 ring-fuchsia-600 rounded-lg"
					onClick={() => disPatch({ btnType: "INCREMENT" })}
				>
					Increment
				</button>
				<button
					type="button"
					className="bg-lime-300 hover:bg-lime-900 text-stone-950 w-24 h-8 ring-2 ring-fuchsia-600 rounded-lg"
					onClick={() => disPatch({ btnType: "DECREMENT" })}
				>
					Decrement
				</button>
				<button
					type="button"
					className="bg-lime-300 hover:bg-lime-900 text-stone-950 w-24 h-8 ring-2 ring-fuchsia-600 rounded-lg"
					onClick={() => disPatch({ btnType: "RESET" })}
				>
					Reset
				</button>
			</div>
		</>
	);
};
