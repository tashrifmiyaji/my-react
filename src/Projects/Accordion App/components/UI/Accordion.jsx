import "../../css/app.css";
import faq from "../../api/faq.json";
import { useEffect, useState } from "react";
import { FAQ } from "../Layout/FAQ";

export const Accordion = () => {
	const [data, setData] = useState([]);
	const [activeId, setActiveId] = useState(false);

	useEffect(() => {
		setData(faq);
	});

	const handleToggleBtn = (id) => {
		setActiveId((prevId) => (prevId === id ? false : id));
	};

	return (
		<>
			<h1>The Accordion</h1>
			<ul className="section-accordion">
				{data.map((curData) => {
					return (
						<FAQ
							key={curData.id}
							data={curData}
							onToggle={() => handleToggleBtn(curData.id)}
							isActive={activeId === curData.id}
						/>
					);
				})}
			</ul>
		</>
	);
};
