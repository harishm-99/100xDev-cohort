import React, { useEffect, useState } from 'react';

export default function App() {

  const [render, setRender] = useState(true)

  useEffect(() => {
    setInterval(() => {
      setRender(r=> !r);
    }, 5000);
  }, []);

  return (
    <>
      <div>
        {render? <MyComponent/> : <div>Hey</div>}
      </div>
    </>
  )
}


class MyComponent extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }

  componentWillUnmount() {
    console.log("Unmounted");
  }

  render() {
    return(
    <>
    {/* Render UI */}
    <div>
      From inside the component
    </div>
      </>
    )
  }
}

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

