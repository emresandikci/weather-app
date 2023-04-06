import { useEffect, useLayoutEffect, useRef } from 'react';

export default function useInterval(
  callback: () => void,
  delay: number | null,
  isPaused?: boolean
) {
  const savedCallback = useRef(callback);

  useLayoutEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setInterval(() => {
      if (!isPaused) savedCallback.current();
    }, delay);

    return () => clearInterval(id);
  }, [delay, isPaused]);
}
