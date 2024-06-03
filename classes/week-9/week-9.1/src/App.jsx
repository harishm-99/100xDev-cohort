import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';
// function App() {

  // const [render, setRender] = useState(true)

  // useEffect(() => {
  //   setInterval(() => {
  //     setRender(r=> !r);
  //   }, 5000);
  // }, []);

//   return (
//     <>
//       <div>
//         {render? <MyComponent/> : <div>Hey</div>}
//       </div>
//     </>
//   )
// }


// class MyComponent extends React.Component {
//   componentDidMount() {
//     console.log("mounted");
//   }

//   componentWillUnmount() {
//     console.log("Unmounted");
//   }

//   render() {
//     // Render UI
//     <div>
//       From inside the component
//     </div>
//   }
// }

// function MyComponent() {
//   useEffect(() => {
//     console.error('Component mounted')

//     return () => {
//       console.log('Component Unmounted');
//     };
//   }, []);

//   // Render UI
//   return (

//     <div>
//       From inside the component
//     </div>
//   )
// }

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos')
      .then((res) => {
        setTodos(res.data.todos);
    })
  },[todos])

  return todos;
}

function App() {
  
  const todos = useTodos();

  return (
    <div>
      {
        todos.map(todo => <Track key={todo.id} todo={todo}/>)
      }
    </div>
  )
}

const Track = ({todo}) => {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  )
}

Track.propTypes = {
  todo: PropTypes.object.isRequired
}

export default App;
