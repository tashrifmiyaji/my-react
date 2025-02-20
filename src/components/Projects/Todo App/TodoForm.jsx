import { useState } from "react";
import {todoItemAddingTime} from "./todoItemAddingTime"

export const TodoForm = ({onAddTodo}) => {
        const [inputValue, setInputValue] = useState({});
		const dateTime = todoItemAddingTime()

        const handleInput = (value) => {
            setInputValue({id:value, content:value, dateTime, checked: false});
        };

        const handleOnSubmit = (event) => {
            event.preventDefault();
            onAddTodo(inputValue)
            setInputValue({content:""});
        }

	return (
		<>
			<section className="form">
				<form onSubmit={handleOnSubmit}>
					<div>
						<input
							type="text"
							name=""
							id=""
							autoComplete="off"
							onChange={(event) =>
								handleInput(event.target.value)
							}
							value={inputValue.content}
						/>
					</div>
					<div>
						<button type="submit">Add Task</button>
					</div>
				</form>
			</section>
		</>
	);
};
