import { useState } from "react"

export const DerivedState = () => {
    const [users, setUsers] = useState([
		{ name: "Ishrat", age: 20 },
		{ name: "Aysha", age: 4 },
		{ name: "Jannatul Mawa", age: 18 },
		{ name: "muwaj", age: 0.4 },
		{ name: "Sumaiya", age: 19 },
	])

    const totalUsers = users.length;
    
    const averageAge = users.reduce((accumulator, currentElement)=>{
        return accumulator + currentElement.age
    },0) / totalUsers

    return(
        <>
        <h1>average users is {totalUsers}</h1>
        <h1>average of age of users is {averageAge}</h1>
        </>
    )
}