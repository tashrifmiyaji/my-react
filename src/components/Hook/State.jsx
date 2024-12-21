import { useState } from "react";
export const State = () => {

    const [count, setCount] = useState(0)

    const handleIncrementButton = () => {
        setCount(() => count + 1)
    }
    return(
        <>
        <div className="h-lvh flex flex-col justify-center items-center">
            <h1 >{count}</h1>
            <button onClick={handleIncrementButton} className="w-20 h-10 bg-red-400 mt-10">Increment</button>
        </div>
        </>
    )
}