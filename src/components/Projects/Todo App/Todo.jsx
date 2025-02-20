import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import {
	setTodoDataToLocalStorage,
	getTodoDataFromLocalStorage,
} from "./TodoLocalStorage";

export const Todo = () => {
	const [todoList, setTodoList] = useState(getTodoDataFromLocalStorage());

	const handleOnSubmit = (inputValue) => {
		// to check if the input field is empty or not!
		if (!inputValue.content) return;

		// to check if the data is already existing or not!
		const ifTodoContentExist = todoList.find(
			(currentTodo) => currentTodo.content === inputValue.content
		);
		if (ifTodoContentExist) return;

		setTodoList((prevTask) => [inputValue, ...prevTask]);
	};

	// add data to local storage.
	setTodoDataToLocalStorage(todoList);

	// Delete Elements and Add a  All-Clear Button in To-Do App

	const handleDeleteBtn = (currentTodo) => {
		const updatedTodoLIst = todoList.filter(
			(todo) => todo.content !== currentTodo
		);
		setTodoList(updatedTodoLIst);
	};

	const HandleCheckBtn = (data) => {
		const updateTodo = todoList.map((curTodo) => {
			if (curTodo.content === data) {
				return { ...curTodo, checked: !curTodo.checked };
			} else {
				return curTodo;
			}
		});
		setTodoList(updateTodo);
	};

	const handleAllClearBtn = () => {
		setTodoList([]);
	};

	return (
		<>
			<div>
				<div className="main-div">
					<section className="todo-container">
						<header className="header">
							<h1>Todo List</h1>
							<TodoDate />
						</header>
						<TodoForm onAddTodo={handleOnSubmit} />
						<section className="myUnOrdList">
							<ul>
								{todoList.map((currentTodo) => {
									return (
										<>
											<TodoList
												key={currentTodo.id}
												data={currentTodo.content}
												dateTime={currentTodo.dateTime}
												checked={currentTodo.checked}
												onHandleDeleteBtn={
													handleDeleteBtn
												}
												onHandleCheckBtn={
													HandleCheckBtn
												}
											/>
										</>
									);
								})}
							</ul>
						</section>
						<section>
							<button
								className="allClear-btn"
								onClick={handleAllClearBtn}
							>
								All Clear
							</button>
						</section>
					</section>
				</div>
				<section>
					<footer className="creator">
						<p>created by @tashrifmiyaji</p>
					</footer>
				</section>
			</div>
		</>
	);
};
