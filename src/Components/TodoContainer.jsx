import { useEffect, useState } from 'react';
import './TodoContainerStyle.css';


function TodoContainer ({todos}) {

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

    return(
        <div className="todoList"> 
            {
                todos.map(post => (
                    <div className="taskCard" key={post.id}>
                    <div className="student">
                        {post.student}
                    </div>
                    <div className="task">
                        {post.task}
                    </div>
                    <div className="isCompleted">
                        --Comp
                    </div>
                </div>
                ))
            }
            {taskData.map(post => (
                <div className="taskCard" key={post.id}>
                    <div className="student">
                        {post.student}
                    </div>
                    <div className="task">
                        {post.task}
                    </div>
                    <div className="isCompleted">
                        --Comp
                    </div>
                </div>
        ))} </div>
    )
}


export default TodoContainer