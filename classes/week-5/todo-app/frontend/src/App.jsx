import {useState} from 'react';
import { CreateTodo } from './components/CreateTodo';
import { Todo } from './components/Todo';

function App() {

  const [todos, setTodos] = useState([])

  fetch('http://localhost:3000/todos')
    .then(function (res) {
      const json = res.json()
      
      setTodos(json.todos)
  })

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
