import { useEffect, useState } from "react";
import "./Todo.css";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleInput = (event) => {
        setInputValue(event)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        
        if (!inputValue) return
        
        if (todoList.includes(inputValue)) {
            setInputValue("");
            return
        }

        setTodoList((prevTask)=> [...prevTask, inputValue])
        setInputValue("")
    }

    // Create a Real-Time Digital Clock in React – Display Current Date and Time in Todo App
    const [dateTime, setDateTime] = useState("")

    useEffect(()=>{
        const interval = setInterval(() => {
            const now = new Date()
            const date = now.toLocaleDateString();
            const time = now.toLocaleTimeString()
            setDateTime(`${date} - ${time}`)
        }, 1000);

        return () => clearInterval(interval);
    },[])

    console.log("hello!");
    
    return(
        <>
        <div className="main-div">
        <section className="todo-container">
            <header className="header">
                <h1>Todo List</h1>
                <h2 className="date-time">{dateTime}</h2>
            </header>
             <section className="form">
            <form onSubmit={handleOnSubmit}>
                <div>
                    <input type="text" name="" id="" autoComplete="off" onChange={(event) => handleInput(event.target.value)} value={inputValue}/>                    
                </div>
                <div>
                    <button type="submit" >Add Task</button>
                </div>
            </form>
        </section>
        <section className="myUnOrdList">
            <ul>
                {
                    todoList.map((currentTodo, index)=>{
                        return(
                            <>
                            <li key={index} className="todo-item">
                            <span>{currentTodo}</span>
                            <button className="check-btn"><FaCheckCircle /></button>
                            <button className="delete-btn"><MdDelete /></button>
                            </li>
                            </>
                        )
                    })
                }
            </ul>
        </section>
        </section>
        </div>
        </>
    )
}

