import { useBioContext } from ".";


export const Home = () => {
    const {myName, myAge} = useBioContext()
    return(
        <>
        <h1 className="text-center">Home</h1>
        <h1 className="text-center">my name is {myName},and my age is {myAge} </h1>
        </>
    )
}