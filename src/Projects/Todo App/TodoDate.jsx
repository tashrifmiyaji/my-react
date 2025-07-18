import { useState, useEffect } from "react";

export const TodoDate = () => {
	// Create a Real-Time Digital Clock in React – Display Current Date and Time in Todo App
	const [dateTime, setDateTime] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			const now = new Date();
			const date = now.toLocaleDateString();
			const time = now.toLocaleTimeString();
			setDateTime(`${date} - ${time}`);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<h2 className="date-time">{dateTime}</h2>
		</>
	);
};
