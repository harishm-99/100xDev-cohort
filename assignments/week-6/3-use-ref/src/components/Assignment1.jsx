import { useEffect,useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const inputRef = useRef();

    useEffect(() => {
        //by dom
        document.getElementById('inputRef').focus();

        // by useRef
        inputRef.current.focus();
    }, [inputRef]);

    const handleButtonClick = () => {
        // by DOM
        document.getElementById('inputRef').focus();

        // by useRef
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};
