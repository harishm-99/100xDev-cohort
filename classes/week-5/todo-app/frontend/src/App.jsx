import {useEffect, useState} from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todo } from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(async function (res) {
        const json =await res.json()
        setTodos(json.todos)
    })  
  },[])

  return (
    <>
      <div>
        <CreateTodo></CreateTodo>
        <Todo todos={todos} />
      </div>
    </>
  )
}

export default App
