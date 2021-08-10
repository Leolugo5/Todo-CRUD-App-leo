import React, { useState } from 'react';
import './CT.css'


function CreateTodo(props) {
    const [name, setName] = useState("");
    const [task, setTask] = useState("");
    

    const handleName = e => {
        setName(e.target.value)
    }
    const handleTask = e => {
        setTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000), 
            task: task,
            student: name,
            isCompleted: false,
            version: 0
        })
        setName("");
        setTask("");
    }


    return <div className="CreateTodo">
        <h2>Task Management</h2>

        <div className="task-form">
            <div className="title">Add a new task</div>
            <form onSubmit={ handleSubmit } className="main-form">
                <label className="studentNameCard"> Name <input type="text" name="Nombre" id="studentName" placeholder="Student Name" onChange={handleName} /> </label>
                <label className="taskDescriptionCard"> Task <input type="text" name="taskDescription" id="taskDescription" placeholder="Task Description" onChange={handleTask} /> </label>
                <button className="submitButton" type="submit" onClick={handleSubmit}> <span> Submit </span> </button>
            </form>
        </div>

    </div>
}


export default CreateTodo