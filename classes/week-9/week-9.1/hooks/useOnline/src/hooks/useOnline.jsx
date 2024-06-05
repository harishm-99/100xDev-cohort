import { useState, useEffect } from "react";

export function useOnline() {

    const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  
    console.log(isOnline);
    
    useEffect(() => {
  
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);
  
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
  
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      }
    }, [])
    
    return isOnline;
  }