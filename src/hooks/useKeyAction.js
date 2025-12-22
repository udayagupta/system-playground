import { useEffect } from "react";

export const useKeyAction = (key, fn, enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e) => {
      if (e.key === key) {
        fn(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [key, fn, enabled]);
};
