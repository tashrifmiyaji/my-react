import { useState } from "react";

export const TodoForm = ({onAddTodo}) => {
        const [inputValue, setInputValue] = useState({});

        const handleInput = (value) => {
            setInputValue({id:value, content:value, checked: false});
        };

        const handleOnSubmit = (event) => {
            event.preventDefault();
            onAddTodo(inputValue)
            setInputValue({id:"", content:"", checked: false});
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
