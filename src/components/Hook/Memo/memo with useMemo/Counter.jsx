import { useMemo, useReducer } from "react";
import ForReactMemo from "./ReactMemo";

export const CounterWithReactMemoAndUseMemo = () => {
	const myBioData = useMemo(() => {
		return {
			name: "tashrif",
			age: 24,
		};
	},[]);

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
					className="bg-lime-400 hover:bg-lime-950 text-stone-950 rounded-lg ring-4 pl-2 pr-2 pt-1 pb-1"
					onClick={() => dispatch({ type: "INCREMENT" })}
				>
					Increment
				</button>
				<ForReactMemo bioData={myBioData} />
			</div>
		</>
	);
};
