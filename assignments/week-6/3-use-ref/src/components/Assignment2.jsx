import React, { useState, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// global variable is only possibilty but hooks will be unused
// let timesRerendered = 0;

export function Assignment2() {

    let renderRef = useRef(0);

    const [, forceRender] = useState(0);
    // incorrect rerender times using state variable
    const [RenderTimes, setRenderTimes] = useState(0);

    const handleReRender = useCallback(() => {
        // Update state to force re-render
        forceRender(Math.random());
        // setRenderTimes(RenderTimes+1);
    }, [])
    
    // Operations using
    // timesReRendered +=1;
    renderRef.current += 1;

    return (
        <div>
            <p>This component has rendered {renderRef.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};