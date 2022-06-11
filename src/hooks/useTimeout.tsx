import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (callbackFunc: any, delay: number) => {
  const callbackFuncRef = useRef(callbackFunc);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackFuncRef.current = callbackFunc;
  }, [callbackFunc]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackFuncRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, clear, set]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
};
