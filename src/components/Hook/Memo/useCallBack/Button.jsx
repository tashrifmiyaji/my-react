import { memo } from "react";

const Button = ({ onClick, children }) => {
	console.log(`rendering button: ${children}`);

	return (
		<button
			className="bg-lime-400 hover:bg-lime-950 text-stone-950 rounded-lg ring-4 pl-2 pr-2 pt-1 pb-1"
			type="button"
			onClick={onClick}
		>
			{children}
		</button>
	);
};



export default memo(Button);
