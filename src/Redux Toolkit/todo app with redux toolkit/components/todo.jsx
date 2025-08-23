import { useSelector, useDispatch } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { addTask, deleteTask, fetchTask } from "../store";

export const Todo = () => {
	const [task, setTask] = useState("");
	const dispatch = useDispatch();

	const state = useSelector((state) => state.taskReducer.task);

	// handle submit
	const handleTodoSubmit = (e) => {
		e.preventDefault();

		if (task !== "") {
			dispatch(addTask(task));
			setTask("");
		}
	};

	// handle task deleting.
	const handleDeleteTask = (id) => {
		dispatch(deleteTask(id))
	};

	// handle fetch task
	const handleFetchTask = () => {
		dispatch(fetchTask())
	}

	return (
		<div className="container">
			<div className="todo-app">
				<h1>
					<i className=""></i>To-do List
				</h1>
				<div className="row">
					<form onSubmit={handleTodoSubmit}>
						<input
							type="text"
							id="input-box"
							placeholder="Add a new task"
							value={task}
							onChange={(e) => setTask(e.target.value)}
						/>
						<button>Add Task</button>
					</form>
				</div>
				<button onClick={handleFetchTask}>Fetch Task</button>
				<ul id="list-container">
					{state.map((curElement, index) => {
						return (
							<li key={index}>
								<p>
									{index}. {curElement}
								</p>
								<div>
									<MdDeleteForever
										className="icon-style"
										onClick={() => handleDeleteTask(index)}
									/>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
