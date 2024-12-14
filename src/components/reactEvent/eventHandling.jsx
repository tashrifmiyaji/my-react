export const EventHandling = () => {

    function handleButtonClick (event) {
        alert("hey! i'm onClick event😊")
        console.log(event);
        console.log(event.type);
        console.log(event.target);
        
    }
    function handleWelcomeUser (user) {
        alert(`welcome ${user}`)
        
        
    }
    return(
        <>
            <button onClick={handleButtonClick} className="w-20 h-10 bg-red-400 m-10">click me!</button>
            <br />
            <button onClick={(event) =>handleButtonClick(event)} className="w-20 h-10 bg-red-400 m-10">click me 2!</button>
            <br />
            <button onClick={ (event)=> console.log(event)} className="w-20 h-10 bg-red-400 m-10">click me 3!</button>
            <br />
            <button onClick={() =>handleWelcomeUser("user")} className="w-20 h-20 bg-lime-400 m-10">click me with argument!</button>
        </>
    )
}