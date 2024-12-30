// //! practice1 without State
// const users = [
// 	{ name: "Ishrat", age: 20 },
// 	{ name: "Aysha", age: 4 },
// 	{ name: "Jannatul Mawa", age: 18 },
// 	{ name: "muwaj", age: 0.4 },
// 	{ name: "Sumaiya", age: 19 },
// ];

// export const Practice1 = () => {
// 	return (
// 		<>
// 			<div className="h-lvh flex flex-col items-center">
// 				<h1>Users list</h1>
// 				<ul>
// 					{users.map((item, index) => {
// 						return (
// 							<>
// 								<li key={index}>
// 									Hi {item.name}, you are {item.age} years old
// 								</li>
// 							</>
// 						);
// 					})}
// 				</ul>
// 			</div>
// 		</>
// 	);
// };


//! practice1 with State
import { useState } from "react";
// const users

export const Practice1 = () => {
	const [users, setUsers] = useState([
		{ name: "Ishrat", age: 20 },
		{ name: "Aysha", age: 4 },
		{ name: "Jannatul Mawa", age: 18 },
		{ name: "muwaj", age: 0.4 },
		{ name: "Sumaiya", age: 19 },
	])
	return (
		<>
			<div className="h-lvh flex flex-col items-center">
				<h1>Users list</h1>
				<ul>
					{users.map((item, index) => {
						return (
							<>
								<li key={index}>
									Hi {item.name}, you are {item.age} years old
								</li>
							</>
						);
					})}
				</ul>
			</div>
		</>
	);
};
