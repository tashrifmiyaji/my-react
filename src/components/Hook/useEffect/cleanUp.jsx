import { useEffect, useState } from "react"

export const CleanUp = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount( (prev) => prev + 1)
        },1000)
        return () => clearInterval(interval)
    },[])

    return(
        <div className="flex flex-col justify-center items-center h-lvh">
            <h1>Subscriber Counter</h1>
            <p>{count} Subscriber</p>
        </div>
    )
}