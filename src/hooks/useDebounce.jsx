import { useRef, useCallback } from "react";

export const useDebounce = (cb, delay) => {
  const timeoutRef = useRef(null);

  const debouncedFn = useCallback((...args) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => cb(...args), delay);
  }, [cb, delay]);

  return debouncedFn;
};
