import { useCallback, useState } from "react";
import  Button  from "./Button";

export const UseCAllBack = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = useCallback(() => {
		console.log("call increment function.");
		setCount((prev) => prev + 1);
	}, []);

	const handleDecrement = () => {
		console.log("call decrement function.");

		setCount((prev) => prev - 1);
	};

	return (
		<div className="w-screen h-screen flex flex-col gap-4 justify-center items-center">
			<h1>count: {count}</h1>
			<Button onClick={handleIncrement}>Increment</Button>
			<Button onClick={handleDecrement}>Decrement</Button>
		</div>
	);
};
