import { useEffect, useMemo, useRef, useState } from 'react';

export const useTimer = (init: number): number => {
  const [time, setTime] = useState<number>(init);

  const shouldRerenderRef = useRef<boolean>(true);
  useMemo(() => {
    shouldRerenderRef.current = false;
  }, [time]);

  useEffect(() => {
    if (shouldRerenderRef.current) {
      setTime(Date.now());
    }
    shouldRerenderRef.current = true;
  });

  return time;
};
