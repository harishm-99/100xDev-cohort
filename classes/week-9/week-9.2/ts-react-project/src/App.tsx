import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Todo title='Gym' description='Go to gym@7:00PM' done={true} />
      </div>
    </>
  )
}

// props way:- 

interface TodoProp {
  title: string,
  description: string,
  done: boolean
}

// function Todo(props: any) {// type - any
// function Todo(props) {//by default type - any
function Todo(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.description}</h3>
    </div>
  )
}

// interface TodoType{
//   title: string;
//   description: string;
//   done: boolean;
// }

// interface TodoInput{
//   todo: TodoType;
// }

// function Todo({ todo }: TodoInput) {
//   return (
//     <div>
//       <h1>{todo.title}</h1>
//       <h2>{todo.description }</h2>
//     </div>
//   )
// }

export default App
