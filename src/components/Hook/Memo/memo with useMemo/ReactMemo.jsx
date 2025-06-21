import { useRef, memo } from "react";

const ForReactMemo = ({ bioData }) => {
	const renderCount = useRef(0);

	const handleRenderCount = () => {
		console.log(renderCount);
		return renderCount.current++;
	};

	return (
		<>
			<h3>hello, my name is {bioData.name} and im {bioData.age} years old.</h3>
			<h3>
				despite I Have nothing for Re-Render im being rerendered
				<span className="text-red-700">{handleRenderCount()}</span>
				time
			</h3>
			<h4>
				if my reRender count is <span className="text-red-700">1</span>
				then your react memo is oky!😊
			</h4>
		</>
	);
};

export default memo(ForReactMemo);
