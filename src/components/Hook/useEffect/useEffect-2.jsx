import { useState, useEffect } from "react";

export const ReactUseEffect2 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect( ()=> {
        document.title = `count : ${count}`
    },[count])
   

    useEffect( ()=>{
        console.log(name);
    },[name])

    return(
        <div className="w-full h-screen bg-emerald-500 flex flex-col items-center space-y-4">
            <h1>UseEffect</h1>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)} className="w-28 h-10 bg-sky-600 rounded ring-4 ring-stone-700">Increment</button>
            <button onClick={() => setCount(count - 1)} className="w-28 h-10 bg-sky-600 rounded ring-4 ring-stone-700">Decrement</button>
           <p>{name}</p>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        </div>
    )
}