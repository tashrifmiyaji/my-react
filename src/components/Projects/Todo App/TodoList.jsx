import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { ImRadioUnchecked } from "react-icons/im";

export const TodoList = ({
	data,
	dateTime,
	checked,
	onHandleDeleteBtn,
	onHandleCheckBtn,
}) => {
	const checkedBtnStyle = () => {
		if (checked) {
			return <ImRadioUnchecked />;
		} else {
			return <FaCheckCircle />;
		}
	};
	return (
		<>
			<li className="todo-item">
				<span className={checked ? "checkList" : "notCheckList"}>
					{data}
				</span>
				<button
					className="check-btn"
					onClick={() => onHandleCheckBtn(data)}
				>
					{checkedBtnStyle()}
				</button>
				<button
					className="delete-btn"
					onClick={() => onHandleDeleteBtn(data)}
				>
					<MdDelete />
				</button>
				<p className="todo-item-adding-time">{dateTime}</p>
			</li>
		</>
	);
};
