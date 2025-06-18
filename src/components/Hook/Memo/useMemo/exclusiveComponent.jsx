// ExclusiveCom component
import { useMemo } from "react";

export const ExclusiveCom = () => {

	const calculateSum = () => {
        console.log("calculating...");
        
		let i = 0;
		for (i = 0; i <= 500000000; i++) {
			// dumi loop for by busy cpu
		}
		return i;
	};

	// const total = calculateSum();

    const total = useMemo(()=>{
        return calculateSum();
    },[])

	return (
		
			<div className="bg-white p-8 rounded-lg shadow-lg text-center">
				<h2 className="text-2xl font-bold text-green-600">
					Big Sum: {total}
				</h2>
			</div>
	);
};
