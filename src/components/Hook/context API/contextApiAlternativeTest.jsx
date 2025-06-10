// step 1
const test = "Test";

// step 2
let test2;
let test3;

// for step 2
const dataProvider = () => {
	const value = {
		test2,
		test3,
	};
	return value;
};

export const Test1_parent = () => {
	const test1 = "test1";

	test2 = "test2";
	test3 = "rest3";

	return (
		<>
			<div className="w-96 h-96 m-4 p-2 border-2 border-slate-100">
				<h1>Hello</h1>
				<h3>{test}</h3>
				<h3>{test1}</h3>
				<Test2_child />
			</div>
		</>
	);
};


const Test2_child = () => {
	return (
		<>
			<div className="w-60 h-60 m-4 p-2 border-2 border-slate-100">
				<h1>Hello</h1>
				<h3>{test}</h3>
				<Test3_grandChild />
			</div>
		</>
	);
};

const Test3_grandChild = () => {

	const value = dataProvider();

	return (
		<>
			<div className="w-28 h-28 m-4 p-1 border-2 border-slate-100">
				<h1>Hello</h1>
				<h3>{test}</h3>
				<h3>{value.test3}</h3>
			</div>
		</>
	);
};
