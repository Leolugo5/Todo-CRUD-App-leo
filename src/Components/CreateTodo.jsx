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

        const cardID = Math.floor(Math.random() * 100000);

        props.onSubmit({
            id: cardID, 
            task: task,
            student: name,
            isCompleted: false,
            version: 0
        })
        postDataTodo()
        async function postDataTodo() {
            try {
                let todoItemData = await fetch('https://todos-go.herokuapp.com/api/todos', {
                    method: 'PUT',
                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringifY({
                        id: cardID,
                        task: task,
                        student: name,
                        isCompleted: false,
                    })
                });
                console.log('Result = ', todoItemData)
            }   catch {

            }
        }
        setName("");
        setTask("");
    }


    return <div className="CreateTodo">
        <h2>Task Management</h2>

        <div className="task-form">
            <div className="title">Add a new task</div>
            <form onSubmit={ handleSubmit } className="main-form">
                <label className="studentNameCard"> Name <input type="text" name="Nombre" id="studentName" placeholder="Student Name" onChange={handleName} value={name} /> </label>
                <label className="taskDescriptionCard"> Task <input type="text" name="taskDescription" id="taskDescription" placeholder="Task Description" onChange={handleTask} value={task} /> </label>
                <button className="submitButton" type="submit" onSubmit={ handleSubmit }> <span> Submit </span> </button>
            </form>
        </div>

    </div>
}


export default CreateTodo