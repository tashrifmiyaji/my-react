import { useContext } from "react";
import { BioContext } from ".";


export const Home = () => {
    const {myName, myAge} = useContext(BioContext)
    return(
        <>
        <h1 className="text-center">Home</h1>
        <h1 className="text-center">my name is {myName},and my age is {myAge} </h1>
        </>
    )
}