import { useEffect, useState } from "react";
import { getPostForOld } from "../api/api.js";

export const FetchOld = () => {
	const [data, setData] = useState([]);
    
	const getPostData = async () => {
		try {
			const res = await getPostForOld();
            if (res.status === 200) {
                setData(res.data);
            } else {
                console.log("Something is wrong!");
            }
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPostData();
	}, []);

	return(
        <div>
            <ul className="section-accordion">
                <h1>FetchOld</h1>
                {
                    data?.map((curData)=>{
                        return(
                            <li key={curData.id}>
                                <p>{curData.id}.</p>
                                <p>Title: {curData.title}</p>
                                <p>Body: {curData.body}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};
