import { useEffect, useState } from 'react';

import { sleep } from '@/shared/utils/sleep';
import { randomChoice } from '@/shared/utils/randomChoice';

export type Gender = 'male' | 'female' | 'none';

export interface SignupData {
  username: string;
  shouldSubscribe: boolean;
  gender: Gender;
}

const generateInitData = (): SignupData => ({
  username: randomChoice(['Vasya', 'Petya', 'Dasha', 'Olya', 'John Doe', 'Sara Doe']),
  shouldSubscribe: randomChoice([false, true]),
  gender: randomChoice(['male', 'female', 'none']),
});

const generateInitDataAsync = async (): Promise<SignupData> => {
  await sleep(2_000);

  return generateInitData();
};

export const useSignupForm = (isAsync = false) => {
  const [formData, setFormData] = useState<SignupData | null>(
    isAsync ? null : generateInitData
  );
  const [isLoading, setIsLoading] = useState<boolean>(isAsync);

  useEffect(() => {
    if (isAsync) {
      (async () => {
        setFormData(await generateInitDataAsync());
        setIsLoading(false);
      })();
    }
  }, [isAsync]);

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
