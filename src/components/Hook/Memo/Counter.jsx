import { useReducer } from "react";
import  ForReactMemo  from "./ReactMemo";

export const CounterForReactMemo = () => {
	const initialValue = {
		count: 0,
		inc: 1,
	};

	const reducer = (state, action) => {
		if (action.type === "INCREMENT")
			return { ...state, count: state.count + state.inc };
	};

	const [state, dispatch] = useReducer(reducer, initialValue);
	return (
		<>
			<div className="w-screen h-screen flex flex-col gap-2 justify-center items-center">
				<h2>{state.count}</h2>
				<button
					type="button"
					className="bg-lime-400 hover:bg-lime-950 text-stone-950 rounded-lg ring-4"
					onClick={() => dispatch({ type: "INCREMENT" })}
				>
					Increment
				</button>
                <ForReactMemo/>
			</div>
		</>
	);
};
