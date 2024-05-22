import { useState } from 'react';

type Callback = () => void;

export const useRerender = (): Callback => {
  const [, setValue] = useState<number>(0);

  return () => setValue((value) => ++value);
};
