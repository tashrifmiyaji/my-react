export const FAQ = ({ data, onToggle, isActive }) => {
	const { question, answer } = data;
	return (
		<li>
			<div className="accordion-grid">
				<p>{question}</p>
				<button
					type="button"
					className={isActive ? "active-btn" : ""}
					onClick={onToggle}
				>
					{isActive ? "Close" : "Show"}
				</button>
			</div>
			<p>{isActive && answer}</p>
		</li>
	);
};
