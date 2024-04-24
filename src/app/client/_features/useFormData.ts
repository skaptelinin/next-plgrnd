import { useEffect, useState } from 'react';

import { randomChoice, sleep } from '@/shared';

export type Gender = 'male' | 'female' | 'none';

export interface SignupData {
  username: string;
  shouldSubscribe: boolean;
  gender: Gender;
}

const generateInitData = async (): Promise<SignupData> => {
  await sleep(2_000);

  return {
    username: randomChoice(['Vasya', 'Petya', 'Dasha', 'Olya', 'John Doe', 'Sara Doe']),
    shouldSubscribe: randomChoice([false, true]),
    gender: randomChoice(['male', 'female', 'none']),
  };
};

export const useSignupForm = () => {
  const [formData, setFormData] = useState<SignupData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setFormData(await generateInitData());
      setIsLoading(false);
    })();
  }, []);

  const changeFormData = (newValue: Partial<SignupData>): void => {
    setFormData((value) => {
      if (value) {
        return { ...value, ...newValue };
      }
      return value;
    });
  }

  return {
    changeFormData,
    formData,
    isLoading,
  };
};
