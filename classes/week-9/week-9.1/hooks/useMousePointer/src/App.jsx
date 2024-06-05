import { useEffect, useState } from "react";

function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  }
  },[])

  return position;

}

function App() {
  
  const mousePointer = useMousePointer();

  return (
    <div>
      {mousePointer.x} {mousePointer.y}
    </div>
  )
}

export default App;