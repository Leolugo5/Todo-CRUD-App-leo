import './App.css';
import TodoContainer from './Components/TodoContainer';
import CreateTodo from './Components/CreateTodo';
import { useState } from 'react';


function App() {

  const [todos, setTodos] = useState([])
  
  const addTodo = todo => {
    const newTodos = [todo, ...todos]

    setTodos(newTodos)
    console.log(todo, ...todos)
  }

  return (
    <div className="App">
      <CreateTodo onSubmit={addTodo}/>
      <div className="display">

        <div className="tasks-to-display">

          
          <TodoContainer todos={todos}/>
         
        </div>
      
      </div>

      
    </div>
    
  );
}

export default App;
/* `````` */