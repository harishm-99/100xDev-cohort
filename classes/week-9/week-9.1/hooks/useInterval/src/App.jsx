// import {useState} from 'react';
// import useInterval from './hooks/useInterval';
  
// function App() {

//   const [count, setCount] = useState(0);

//   useInterval(() => {
//       setCount(count => count + 1);
//       }, 2000);

//   return (
//     <div>
//        Timer is {count} times.
//     </div>
//   )
// }

// export default App;

import { useState } from 'react';
import useInterval from './hooks/useInterval';

function App() {

  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count => count + 1);
  }, 1000);

  return (
    <div>
      TImer is at {count}
    </div>
  )
}

export default App;