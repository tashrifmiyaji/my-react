// import { useState } from "react";

// export const Counter = () => {
// 	const [count, setCount] = useState(0)
// 	const [step, setStep] = useState(1)


// 	// handle increment
// 	const incrementHandle = () => {
// 		if (count + step <= 1000) {
// 			setCount(count + step)
// 		}
// 	}

// 	// handle step and input
// 	const stepHandle = (event) => {	
// 		const value = parseInt(event.target.value)
// 		if (isNaN(value)) {
// 			setStep(0)
// 		} else {
// 			setStep(value)
// 		}
// 	}

// 	// handle decrement
// 	const handleDecrement = () => {
// 		if (count - step >= 0) {
// 			setCount(count - step)
// 		}
// 	}
	
// 	// handle reset
// 	const handleReset = () => {
// 		setCount(0)
// 		setStep(1)
// 	}
// 	return (
// 		<div className="w-full h-lvh flex justify-center items-center">
// 			<div className="w-[35rem] h-60 bg-purple-300 rounded-3xl ring-4">
// 				<h1 className="text-center">Counter</h1>
// 				<p className="text-4xl font-bold text-center mt-8 mb-6">{count}</p>
// 				<form action="" onInput={stepHandle}>
// 					<input type="number" name="" id="" placeholder="step" value={step} className="block ml-auto mr-auto ring-1 rounded-md"/>
// 				</form>
// 				<div className="flex grid-flow-col justify-center space-x-20 mt-8">
// 					<button type="button" className="bg-pink-400 w-[110px] h-6 ring-2 rounded-3xl" onClick={incrementHandle}>Increment</button>
// 					<button type="button" className="bg-pink-400 w-[110px] h-6 ring-2 rounded-3xl" onClick={handleDecrement}>Decrement</button>
// 					<button type="button" className="bg-pink-400 w-[110px] h-6 ring-2 rounded-3xl" onClick={handleReset}>Reset</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
//////////////////
import { useState } from "react";

export const Counter = () => {
	const [count, setCount] = useState(0)
	const [step, setStep] = useState(1)


	// handle increment
	const incrementHandle = () => {
			setCount(count + step)
	}

	// handle step and input
	const stepHandle = (event) => {	
		const value = parseInt(event.target.value)
		if (isNaN(value)) {
			setStep(0)
		} else {
			setStep(value)
		}
	}

	// handle decrement
	const handleDecrement = () => {
			setCount(count - step)
	}
	
	// handle reset
	const handleReset = () => {
		setCount(0)
		setStep(1)
	}
	return (
		<div className="w-full h-lvh flex justify-center items-center">
			<div className="w-[35rem] h-60 bg-purple-300 rounded-3xl ring-4">
				<h1 className="text-center">Counter</h1>
				<p className="text-4xl font-bold text-center mt-8 mb-6">{count}</p>				
					<input onChange={stepHandle} type="number" name="" id="" placeholder="step" value={step} className="block ml-auto mr-auto ring-1 rounded-md"/>
				<div className="flex grid-flow-col justify-center space-x-20 mt-8">
					<button type="button" className="bg-pink-400 w-[110px] h-6 ring-2 rounded-3xl" onClick={incrementHandle} disabled={ count >= 1000}>Increment</button>
					<button type="button" className="bg-pink-400 w-[110px] h-6 ring-2 rounded-3xl" onClick={handleDecrement} disabled={ count <= 0}>Decrement</button>
					<button type="button" className="bg-pink-400 w-[110px] h-6 ring-2 rounded-3xl" onClick={handleReset}>Reset</button>
				</div>
			</div>
		</div>
	);
};

