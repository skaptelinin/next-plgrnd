import { useEffect, useRef } from 'react';

export const useTimer = (init: number): number => {
  const isMountedRef = useRef<boolean>(false);

  useEffect(() => {
    isMountedRef.current = true;
  }, []);

  return isMountedRef.current ? Date.now() : init;
};
