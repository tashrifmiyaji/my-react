import { useState } from "react";
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

    return(
        <>
        <div className="main-div">
        <section className="todo-container">
            <header className="header">
                <h1>Todo List</h1>
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

