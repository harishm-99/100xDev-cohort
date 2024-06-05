// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { PropTypes } from 'prop-types';

// const useTodos = (n) => {

//   const [todos, setTodos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getData = ()=> {
//     axios.get('https://sum-server.100xdevs.com/todos')
//     .then((res) => {
//       setTodos(res.data.todos);
//       setLoading(false);
//     });
//   }
  
//   useEffect(() => {
//     const value = setInterval(() => getData(), n * 1000);
//     getData();
//     return () => { clearInterval(value) };
//   }, [])


//   return {todos, loading};
// }

// function App() {
  
//   const { todos, loading } = useTodos(5);

//   if (loading) {
//     return <div>Loading...</div>
//   }
//   return (
//     <div>
//       {
//         todos.map(todo => <Track key={todo.id} todo={todo}/>)
//       }
//     </div>
//   )
// }

// const Track = ({todo}) => {
//   return (
//     <div>
//       {todo.title}
//       <br />
//       {todo.description}
//     </div>
//   )
// }

// Track.propTypes = {
//   todo: PropTypes.object.isRequired
// }

// export default App;


// swr is a popular React library that creates a lot of these hooks for you, and you can use it directly.
// For example - 

// import useSWR from 'swr'

// export default function App() {

// // const fetcher = (url) => fetch(url).then((res) => res.json());
//    const fetcher = async function(url) {
//   const data = await fetch(url);
//   const json = await data.json();
//   return json;
// };

// function Profile() {
//   const { data, error, isLoading } = useSWR('https://sum-server.100xdevs.com/todos', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello, you have {data.todos.length} todos!</div>
// }
  
//   if (loading) {
//     return (
//       <div>Loading...</div>
//     )
//   }
  
//   return (
//     <div>
//       { 
//         todos.map(todo => <Track todo={todo} key={todo.id}/>)
//       }
//     </div>
//   )
// }

// const Track = ({ todo }) => {
//   return (
//     <>
//     <div>{todo.title}</div>
//       <div>{todo.description}</div>
//     </>
//   )
// }

// Track.propTypes = {
//   todo : PropTypes.object.isRequired
// }


import { useEffect, useState } from "react";
import { PropTypes } from 'prop-types';
import axios from "axios";


const useTodos = () => {
  
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios.get('https://sum-server.100xdevs.com/todos')
      .then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      })
  }
  
  useEffect(() => {
    const value = setInterval(()=> getData(), 3000);
    getData();
    return () => clearInterval(value)
  }, []);

  return { todos, loading };
}

function App() {
    
  const { todos, loading } = useTodos();
  
  return (
    <div>
      {
        loading? <div>Loading</div> : todos.map(todo => <Track todo={todo} key={todo.id} />)
      }
    </div>
  )
  }

const Track = ({ todo }) => {
    
  return (
    <>
    <div>
      {todo.title}
    </div>
    <div>
      {todo.description}
      </div>
    </>
  )
}
  
Track.propTypes = {
  todo: PropTypes.object.isRequired
}

  export default App;