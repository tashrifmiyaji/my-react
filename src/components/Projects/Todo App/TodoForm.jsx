import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
        const [inputValue, setInputValue] = useState("");

        const handleInput = (event) => {
            setInputValue(event);
        };

        const handleOnSubmit = (event) => {
            event.preventDefault();
            onAddTodo(inputValue)
            setInputValue("");
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
							value={inputValue}
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
