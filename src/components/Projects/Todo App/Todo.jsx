import "./Todo.css";
import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
	const [todoList, setTodoList] = useState([]);

	const handleOnSubmit = (inputValue) => {
		if (!inputValue) return;

		if (todoList.includes(inputValue)) {
			// setInputValue("");
			return;
		}

		setTodoList((prevTask) => [...prevTask, inputValue]);
	};

	// Delete Elements and Add a  All-Clear Button in To-Do App

	const handleDeleteBtn = (currentTodo) => {
		const updatedTodoLIst = todoList.filter((todo) => todo !== currentTodo);
		setTodoList(updatedTodoLIst);
	};

	const handleAllClearBtn = () => {
		setTodoList([]);
	};

	return (
		<>
			<div className="main-div">
				<section className="todo-container">
					<header className="header">
						<h1>Todo List</h1>
                        <TodoDate/>
					</header>
					<TodoForm onAddTodo={handleOnSubmit} />
					<section className="myUnOrdList">
						<ul>
							{todoList.map((currentTodo, index) => {
								return (
									<>
										<TodoList
											key={index}
											data={currentTodo}
											onHandleDeleteBtn={handleDeleteBtn}
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
		</>
	);
};
