import './App.css';
import TodoContainer from './Components/TodoContainer';
import CreateTodo from './Components/CreateTodo';
import { useState } from 'react';


function App() {

  const [todos, setTodos] = useState([])
  const todoListReloader = false;
  
  const addTodo = todo => {
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  /* const updateList =  fetch("https://todos-go.herokuapp.com/api/todos", {
    method: 'GET',
    headers: {
      "Content-Type":"application/json"
      },
    body: raw,
    redirect: 'follow'
  }) */

  return (
    <div className="App">
      <CreateTodo onSubmit={addTodo} />
      <div className="display">

        <div className="tasks-to-display">

          
          <TodoContainer todos={todos} todoListReloader={todoListReloader} />
         
        </div>
      
      </div>

      
    </div>
    
  );
}

export default App;
/* `````` */