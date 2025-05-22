import { useRef, forwardRef, useId } from "react";

export const ForwardRef = () => {
	const username = useRef(null);
	const password = useRef(null);

	const formHandling = (e) => {
		e.preventDefault();
		console.log(username.current, password.current.value);
	};

	return (
		<>
			<section>
				<header>
					<h1 className="text-center">ForwardRef</h1>
				</header>
				<div className="h-screen w-full flex justify-center mt-16">
					<form onSubmit={formHandling}>
						{/* <BeforeReact19
							label="username"
							type="text"
							ref={username}
						/>
						<BeforeReact19
							label="password"
							type="password"
							ref={password}
						/> */}
                        <AfterReact19
							label="username"
							type="text"
							ref={username}
						/>
						<AfterReact19
							label="password"
							type="password"
							ref={password}
						/>
						<br />
						<div>
							<button
								type="submit"
								className="bg-green-500 w-20 h-8 ml-28"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};

// const BeforeReact19 = forwardRef((props, ref) => {
// 	const id = useId();
// 	return (
// 		<>
// 			<div className="m-8">
// 				<label htmlFor={id}>{props.label} : </label>
// 				<input type={props.type} ref={ref} />
// 			</div>
// 		</>
// 	);
// });

const AfterReact19 = (props) => {
	const id = useId();
	return (
		<>
			<div className="m-8">
				<label htmlFor={id}>{props.label} : </label>
				<input type={props.type} ref={props.ref} />
			</div>
		</>
	);
};
