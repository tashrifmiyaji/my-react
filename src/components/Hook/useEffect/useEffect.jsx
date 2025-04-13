import { useState, useEffect } from "react";

export const ReactUseEffect = () => {
    const [count, setCount] = useState(0)

    useEffect( ()=> {
        console.log("this is useEffect count value without dependency :", count );
        
    },[])

    useEffect( ()=> {
        console.log("this is useEffect count value with dependency :", count );
        
    },[count])

    return(
        <div className="w-full h-screen bg-emerald-500 flex flex-col items-center space-y-4">
            <h1>UseEffect</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className="w-28 h-10 bg-sky-600 rounded ring-4 ring-stone-700">Increment</button>
            <button onClick={() => setCount(count - 1)} className="w-28 h-10 bg-sky-600 rounded ring-4 ring-stone-700">Decrement</button>
        </div>
    )
}