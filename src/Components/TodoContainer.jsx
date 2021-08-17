import React, { useEffect, useState } from 'react';
import './TodoContainerStyle.css';


function TodoContainer (props) {

    const [taskData, setTaskData] = useState([])
    
    useEffect(() => {
        const request = async () => {
            const link = `https://todos-go.herokuapp.com/api/todos`;
            const response = await fetch(link);
            const data = await response.json();
            setTaskData(data.todos)
        }
        request();
        
    }, [])
    
    const mNotComplete = fetch("https://todos-go.herokuapp.com/api/todos", {
        method: 'PUT',
        headers: {
          "Content-Type":"application/json"
          },
        body: {
            "id": "611745d9e5acdf25bc71413d",
            "task": "Cena",
            "student": "Jhon",
            "isCompleted": true,
            "version": 0
        },
        redirect: 'follow'
      })

    const isCompleteBTN = <button className="complete" onClick={mNotComplete} > is complete </button>
    const notCompleteBTN = <button className="notComplete" onClick={mNotComplete}> Not complete </button>
    return(
        <div className="todoList"> 
            {taskData.map(post => (
                <div className="taskCard" key={post.id}>
                    <div className="student-name-tag">
                        <h3>Name</h3>
                        <div className="student">
                            {post.student}
                        </div>
                    </div>
                    <div className="student-task-tag">
                        <h3>Task</h3>
                        <div className="task">
                            {post.task}
                        </div>
                    </div>
                    <div className="student-status-tag">
                        <h3>Status</h3>
                        { post.isCompleted ? isCompleteBTN : notCompleteBTN }
                    </div>
                    <div className="delete-task">    
                        <span class="material-icons">
                            delete
                        </span>
                    </div>
                </div>
        ))} </div>
    )
}


export default TodoContainer