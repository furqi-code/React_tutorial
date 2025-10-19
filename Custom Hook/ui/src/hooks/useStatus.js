import { useState, useEffect } from "react";

export function useOnlineStatus(initialState) {
  const [isOnline, setIsOnline] = useState(initialState);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return [isOnline, setIsOnline];
}
