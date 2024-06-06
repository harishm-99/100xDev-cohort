import { useEffect } from "react";

const useInterval = (callback, delay) => {
    useEffect(() => {
        const intervalId = setInterval(callback, delay);
        return() =>{ clearInterval(intervalId) }
    },[callback, delay])
}

export default useInterval;