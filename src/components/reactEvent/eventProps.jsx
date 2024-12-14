export const EventProps = () => {

    const handleWelcomeUser = (user) => {
        alert(`welcome ${user}`)
    }

    const handleHover =()=>{
        alert("hey, thanks for haver me!")
    }

    return(
        <>
        <WelcomeUser
        myOnClick={ ()=> handleWelcomeUser("Robiul") }
        myOnMouseEnter={handleHover}
        />
        </>
    )
}

const WelcomeUser = (props) => {
    const {myOnClick, myOnMouseEnter} = props

    const handleGreeting =() => {
        console.log("hey user, welcome!");
        myOnClick();
    }

    return(
        <>
        <button onClick={props.myOnClick} className="w-20 h-10 bg-red-400 m-10">Click me</button>
        <br />
        <button onMouseEnter={props.myOnMouseEnter} className="w-20 h-10 bg-red-400 m-10">Hover me</button>
        <br />
        <button onClick={handleGreeting} className="w-20 h-10 bg-red-400 m-10">Greeting</button>
        </>
    )
    
}