import { useEffect, useState } from "react";

export default function useDebounce(value, timeInterval) {
    
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDebouncedValue(value);
        }, timeInterval)

        return () =>{clearInterval(intervalId)}
    }, [value, timeInterval]);

    return debouncedValue;
}