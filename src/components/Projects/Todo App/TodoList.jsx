import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const TodoList = ({ key, data, onHandleDeleteBtn }) => {
	return (
		<>
			<li key={key} className="todo-item">
				<span>{data}</span>
				<button className="check-btn">
					<FaCheckCircle />
				</button>
				<button
					className="delete-btn"
					onClick={() => onHandleDeleteBtn(data)}
				>
					<MdDelete />
				</button>
			</li>
		</>
	);
};
