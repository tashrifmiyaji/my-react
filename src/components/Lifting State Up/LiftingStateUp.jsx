import { useState } from "react"

export const LiftingStateUp = () => {
    const [inputValue, setInputValue ] = useState("")
    return(
        <>
        <InputValue inputValue={inputValue} setInputValue={setInputValue} />
        <DisplayValue inputValue={inputValue}/>
        </>
    )
}

const InputValue = ({inputValue, setInputValue}) => {
    return(
        <>
        <div className="flex justify-center h-[50vh] items-center bg-violet-800 rounded-2xl">
            <input onChange={(e)=> setInputValue(e.target.value)} value={inputValue} className="border-2 border-black placeholder-gray-600" type="text" placeholder="enter your name"/>
        </div>
        </>
    )
}

const DisplayValue = ({inputValue}) => {
    return(
        <>
        <div className="h-[50vh] bg-green-700 rounded-2xl">
            <p className=" text-center font-bold text-4xl" >The current input is : {inputValue}</p>
        </div>
        </>
    )
}