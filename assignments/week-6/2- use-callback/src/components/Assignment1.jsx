import { useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    // Your code starts here

    // const handleIncrement = useCallback(() => {
    //     console.log("renderInc");
    //     setCount(count + 1);
    // },[])

    //same code can be optimized by using custom function inside setCount so we will not need the dependency 
    const handleIncrement = useCallback(() => {
        console.log("renderInc");
        setCount(function (count) {
            return count + 1;
        });
    },[])

    //or fn this way
    const handleDecrement = useCallback(function () {
        console.log("renderDec");
        setCount(count => count - 1);
    },[])
    // Your code ends here

    return (
        <div>
            <p>Count: {count}</p>
            {console.log("renderAppChild")}
            <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        {console.log("cRender")}
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
